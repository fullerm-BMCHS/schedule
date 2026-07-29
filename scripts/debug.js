/* Accelerated-clock debugger using production highlighting. */
(function () {
    "use strict";

    const nativeSetInterval = window.__debugNativeSetInterval;
    const productionUpdateScreen = window.updateScreen;
    delete window.__debugNativeDate;
    delete window.__debugNativeSetInterval;

    /* Suppress production timers; the debugger owns the clock. */
    window.setInterval = function (callback, delay) {
        if (callback === productionUpdateScreen) {
            return 0;
        }
        return nativeSetInterval(callback, delay);
    };

    const state = {
        intervalId: null,
        isRunning: true,
        tickMilliseconds: 250
    };

    const previousButton = document.getElementById("debug-previous");
    const toggleButton = document.getElementById("debug-toggle");
    const nextButton = document.getElementById("debug-next");
    const speedSelect = document.getElementById("debug-speed");
    const status = document.getElementById("debug-status");
    const scheduleDisplay = document.getElementById("schedule");

    /* Sync the playback button. */
    function setRunning(isRunning) {
        state.isRunning = isRunning;
        toggleButton.textContent = state.isRunning ? "Pause" : "Play";
        toggleButton.setAttribute("aria-pressed", String(!state.isRunning));
    }

    /* Detect normal-speed playback. */
    function isNormalSpeedMode() {
        return speedSelect.value === "normal";
    }

    /* Read the selected schedule's time range. */
    function getScheduleBounds() {
        if (window.currentButton === "btn-Cal") {
            return null;
        }

        const table = document.getElementById("schedTable");
        if (!table || table.rows.length < 2) {
            return null;
        }

        const firstRow = table.rows[1];
        const lastRow = table.rows[table.rows.length - 1];
        return {
            start: window.getDate(firstRow.cells[1].textContent).getTime(),
            end: window.getDate(lastRow.cells[2].textContent).getTime()
        };
    }

    /* Start five minutes before the first row. */
    function resetToScheduleStart() {
        const bounds = getScheduleBounds();
        if (!bounds) {
            updateSimulation();
            return;
        }

        window.__debugNow = bounds.start - (5 * 60 * 1000);
        updateSimulation();
    }

    /* Describe the production highlight state. */
    function describeHighlight() {
        if (window.currentButton === "btn-Cal") {
            return "Calendar · no timed-period highlighting";
        }

        const table = document.getElementById("schedTable");
        const highlightedCell = table ? table.querySelector("td.highlighted") : null;
        if (!highlightedCell) {
            return "No active period or passing time";
        }

        const row = highlightedCell.parentElement;
        const periodName = row.cells[0].textContent.trim();
        const cellIndex = Array.prototype.indexOf.call(row.cells, highlightedCell);

        /* The fifth cell represents passing time. */
        if (cellIndex === 4) {
            return "Passing after " + periodName;
        }
        return periodName + " in session";
    }

    /* Make timed rows clickable and keyboard accessible. */
    function prepareInteractiveRows() {
        if (window.currentButton === "btn-Cal") {
            return;
        }

        document.querySelectorAll("#schedTable tbody tr:not([data-debug-jump])")
            .forEach(function (row) {
                const periodName = row.cells[0].textContent.trim();
                const startTime = row.cells[1].textContent.trim();
                row.dataset.debugJump = "true";
                row.tabIndex = 0;
                row.setAttribute(
                    "aria-label",
                    "Jump simulated clock to " + periodName + " at " + startTime
                );
                row.title = "Jump to " + periodName + " at " + startTime;
            });
    }

    /* Run production highlighting and refresh debug status. */
    function updateSimulation() {
        document.querySelectorAll("#schedTable .debug-current-row").forEach(function (row) {
            row.classList.remove("debug-current-row");
        });

        productionUpdateScreen();

        /* Refresh the production countdown after each debug tick. */
        if (typeof window.updatePassingCountdown === "function") {
            window.updatePassingCountdown();
        }

        /* Check end-time reminders against the simulated clock. */
        if (typeof window.updateEndTimeReminder === "function") {
            window.updateEndTimeReminder();
        }

        /* Check the end-of-day cue against the simulated clock. */
        if (typeof window.updateEndOfDayCelebration === "function") {
            window.updateEndOfDayCelebration();
        }

        prepareInteractiveRows();

        const highlightedCell = document.querySelector("#schedTable td.highlighted");
        if (highlightedCell) {
            highlightedCell.parentElement.classList.add("debug-current-row");
        }

        const activeButton = document.querySelector(".schedule-nav button.active");
        const scheduleName = activeButton ? activeButton.textContent.trim() : "Schedule";
        const simulatedTime = new window.Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit"
        });
        const modeName = !state.isRunning
            ? "Paused"
            : (isNormalSpeedMode() ? "Normal speed" : speedSelect.value + " min/sec");
        status.textContent = modeName + " · " + scheduleName + " · "
            + simulatedTime + " · " + describeHighlight();
    }

    /* Advance time and loop five minutes after the schedule ends. */
    function advanceMinutes(minutes) {
        window.__debugNow += minutes * 60 * 1000;

        const bounds = getScheduleBounds();
        if (bounds && window.__debugNow > bounds.end + (5 * 60 * 1000)) {
            window.__debugNow = bounds.start - (5 * 60 * 1000);
        }

        updateSimulation();
    }

    /* Pause and jump to a row's start time. */
    function jumpToRow(row) {
        if (!row || window.currentButton === "btn-Cal") {
            return;
        }

        window.__debugNow = window.getDate(row.cells[1].textContent).getTime();
        setRunning(false);
        startClock();
        updateSimulation();
        row.focus();
    }

    /* Run four simulation ticks per second. */
    function startClock() {
        if (state.intervalId !== null) {
            window.clearInterval(state.intervalId);
            state.intervalId = null;
        }

        if (!state.isRunning) {
            return;
        }

        state.intervalId = nativeSetInterval(function () {
            /* Normal mode preserves simulated time at 1× speed. */
            if (isNormalSpeedMode()) {
                advanceMinutes(state.tickMilliseconds / (60 * 1000));
                return;
            }

            const minutesPerSecond = Number(speedSelect.value);
            const minutesThisTick = minutesPerSecond * (state.tickMilliseconds / 1000);
            advanceMinutes(minutesThisTick);
        }, state.tickMilliseconds);
    }

    previousButton.addEventListener("click", function () {
        setRunning(false);
        startClock();
        advanceMinutes(-1);
    });

    nextButton.addEventListener("click", function () {
        setRunning(false);
        startClock();
        advanceMinutes(1);
    });

    toggleButton.addEventListener("click", function () {
        setRunning(!state.isRunning);
        startClock();
    });

    speedSelect.addEventListener("change", function () {
        // Preserve simulated time when speed changes.
        updateSimulation();
        startClock();
    });

    /* Reset after navClick() rebuilds the table. */
    document.querySelectorAll(".schedule-nav button").forEach(function (button) {
        button.addEventListener("click", function () {
            resetToScheduleStart();
        });
    });

    /* Delegate row jumps across table rebuilds. */
    scheduleDisplay.addEventListener("click", function (event) {
        const row = event.target.closest("tr[data-debug-jump]");
        if (row && scheduleDisplay.contains(row)) {
            jumpToRow(row);
        }
    });

    scheduleDisplay.addEventListener("keydown", function (event) {
        const row = event.target.closest("tr[data-debug-jump]");
        if (!row || (event.key !== "Enter" && event.key !== " ")) {
            return;
        }

        event.preventDefault();
        jumpToRow(row);
    });

    resetToScheduleStart();
    startClock();
}());
