console.log("Hello Hollis!");

// Data for Bell Schedules and Calendar
var data = { 
    "btn-MF" : [
        ["Period","Start","End","Duration","Passing"],        
        ["1st", " 7:40 am", " 8:30 am", "0:50", "0:06"],
        ["2nd", " 8:36 am", " 9:25 am", "0:49", "0:06"],
        ["3rd", " 9:31 am", "10:20 am", "0:49", "0:06"],
        ["4th", "10:26 am", "11:15 am", "0:49", "0:06"],
        ["5th", "11:21 am", "12:10 pm", "0:49", "0:06"],
        ["6th", "12:16 pm", " 1:05 pm", "0:49", "0:06"],
        ["7th", " 1:11 pm", " 2:00 pm", "0:49", "0:06"],
        ["8th", " 2:06 pm", " 2:55 pm", "0:49", "0:05"],
        ["9th", " 3:00 pm", " 3:30 pm", "0:30", " "]],
    "btn-Wed" : [
        ["Period","Start","End","Duration","Passing"],
        ["1st", " 7:40 am", " 8:25 am", "0:45", "0:06"],
        ["2nd", " 8:31 am", " 9:16 am", "0:45", "0:06"],
        ["3rd", " 9:22 am", "10:07 am", "0:45", "0:06"],
        ["4th", "10:13 am", "10:58 am", "0:45", "0:06"],
        ["5th", "11:04 am", "11:49 am", "0:45", "0:06"],
        ["6th", "11:55 am", "12:40 pm", "0:45", "0:06"],
        ["7th", "12:46 pm", " 1:31 pm", "0:45", "0:06"],
        ["8th", " 1:37 pm", " 2:22 pm", "0:45", "0:06"]],
    "btn-classMass" : [
        ["Period","Start","End","Duration","Passing"],        
        ["1st", " 7:40 am", " 8:30 am", "0:50", "0:06"],
        ["2nd", " 8:36 am", " 9:25 am", "0:49", "0:06"],
        ["3rd", " 9:31 am", "10:20 am", "0:49", "0:06"],
        ["7th", "10:26 am", "11:15 am", "0:49", "0:06"],
        ["4th", "11:21 am", "12:10 pm", "0:49", "0:06"],
        ["5th", "12:16 pm", " 1:05 pm", "0:49", "0:06"],
        ["6th", " 1:11 pm", " 2:00 pm", "0:49", "0:06"],
        ["8th", " 2:06 pm", " 2:55 pm", "0:49", "0:05"],
        ["9th", " 3:00 pm", " 3:30 pm", "0:30", " "]],
    "btn-allMass" : [
        ["Period","Start","End","Duration","Passing"],
        ["1st", " 7:40 am", " 8:15 am", "0:35", "0:06"],
        ["2nd", " 8:21 am", " 8:56 am", "0:35", "0:06"],
        ["3rd", " 9:02 am", " 9:37 am", "0:35", "0:06"],
        ["HR ", " 9:43 am", " 9:45 am", "0:02", "0:15"],
        ["MASS","10:00 am", "11:30 am", "1:30", "0:15"],
        ["4th", "11:45 am", "12:19 pm", "0:34", "0:06"],
        ["5th", "12:25 pm", "12:59 pm", "0:34", "0:06"],
        ["6th", " 1:05 pm", " 1:39 pm", "0:34", "0:06"],
        ["7th", " 1:45 pm", " 2:17 pm", "0:32", "0:06"],
        ["8th", " 2:23 pm", " 2:55 pm", "0:32", "0:05"],
        ["9th", " 3:00 pm", " 3:30 pm", "0:32", " "]],
    "btn-campMass" : [
        ["Period","Start","End","Duration","Passing"],
        ["1st", " 7:40 am", " 8:15 am", "0:35", "0:06"],
        ["2nd", " 8:21 am", " 8:56 am", "0:35", "0:06"],
        ["3rd", " 9:02 am", " 9:37 am", "0:35", "0:06"],
        ["HR ", " 9:43 am", " 9:45 am", "0:02", "0:15"],
        ["MASS","10:00 am", "11:45 am", "1:45", "0:16"],
        ["4th", "12:01 pm", "12:31 pm", "0:30", "0:06"],
        ["5th", "12:37 pm", " 1:07 pm", "0:30", "0:06"],
        ["6th", " 1:13 pm", " 1:43 pm", "0:30", "0:06"],
        ["7th", " 1:49 pm", " 2:19 pm", "0:30", "0:06"],
        ["8th", " 2:25 pm", " 2:55 pm", "0:30", "0:05"],
        ["9th", " 3:00 pm", " 3:30 pm", "0:30", " "]],
    "btn-wBless" : [
        ["Period","Start","End","Duration","Passing"],
        ["1st", " 7:40 am", " 8:10 am", "0:30", "0:06"],
        [" HR", " 8:16 am", " 8:20 am", "0:04", "0:15"],
        ["Bless", " 8:35 am", " 9:10 am", "0:35", "0:15"],
        ["2nd", " 9:25 am", "10:02 am", "0:37", "0:06"],
        ["3rd", "10:08 am", "10:45 am", "0:37", "0:06"],
        ["4th", "10:51 am", "11:29 am", "0:38", "0:06"],
        ["5th", "11:35 am", "12:13 pm", "0:38", "0:06"],
        ["6th", "12:19 pm", "12:57 pm", "0:38", "0:06"],
        ["7th", " 1:03 pm", " 1:40 pm", "0:37", "0:06"],
        ["8th", " 1:46 pm", " 2:22 pm", "0:37", "0:06"]],
    "btn-mtthfBless" : [
        ["Period","Start","End","Duration","Passing"],
        ["1st", " 7:40 am", " 8:20 am", "0:40", "0:06"],
        [" HR", " 8:26 am", " 8:30 am", "0:04", "0:15"],
        ["Bless", " 8:45 am", " 9:15 am", "0:30", "0:15"],
        ["2nd", " 9:30 am", "10:10 am", "0:40", "0:06"],
        ["3rd", "10:16 am", "10:56 am", "0:40", "0:06"],
        ["4th", "11:02 am", "11:45 am", "0:43", "0:06"],
        ["5th", "11:51 am", "12:34 pm", "0:43", "0:06"],
        ["6th", "12:40 pm", " 1:23 pm", "0:43", "0:06"],
        ["7th", " 1:29 pm", " 2:09 pm", "0:40", "0:06"],
        ["8th", " 2:15 pm", " 2:55 pm", "0:40", "0:05"],
        ["9th", " 3:00 pm", " 3:30 pm", "0:40", "0:06"]],
    "btn-d001" : [
        ["Period","Start","End","Duration","Passing"],        
        ["1st", " 7:40 am", " 8:30 am", "0:50", "0:06"],
        ["2nd", " 8:36 am", " 9:25 am", "0:49", "0:06"],
        ["3rd", " 9:31 am", "10:55 am", "1:24", "0:06"],
        ["4th", "11:01 am", "11:43 am", "0:42", "0:06"],
        ["5th", "11:49 am", "12:31 pm", "0:42", "0:06"],
        ["6th", "12:37 pm", " 1:19 pm", "0:42", "0:06"],
        ["7th", " 1:25 pm", " 2:07 pm", "0:42", "0:06"],
        ["8th", " 2:13 pm", " 2:55 pm", "0:42", "0:05"],
        ["9th", " 3:00 pm", " 3:30 pm", "0:30", " "]],
    "btn-pep" : [
        ["Period","Start","End","Duration","Passing"],
        ["1st", " 7:40 am", " 8:20 am", "0:40", "0:06"],
        ["2nd", " 8:26 am", " 9:06 am", "0:40", "0:06"],
        ["3rd", " 9:12 am", " 9:52 am", "0:40", "0:06"],
        ["7th", " 9:58 am", "10:38 am", "0:40", "0:06"],
        ["4th", "10:44 am", "11:26 am", "0:42", "0:06"],
        ["5th", "11:32 am", "12:14 pm", "0:42", "0:06"],
        ["6th", "12:20 pm", " 1:02 pm", "0:42", "0:06"],
        ["8th", " 1:08 pm", " 1:48 pm", "0:40", "0:06"],
        [" HR", " 1:54 pm", " 1:58 pm", "0:04", "0:12"],
        ["Pep", " 2:10 pm", " 2:55 pm", "0:45", "0:05"],
        ["9th", " 3:00 pm", " 3:30 pm", "0:30", " "]],
    "btn-Exams" : [
        ["Period","Start","End","Duration","Passing"],        
        ["Arrive", " 7:30 am", " 7:55 am", "0:15", "0:05"],
        ["Exam 1", " 8:00 am", " 9:30 am", "1:30", "0:30"],
        ["Exam 2", "10:00 am", "11:30 am", "1:30", "0:01"],
        ["Dismiss", "11:31 am", " 3:30 pm", "4:00", "0:00"]],
    "btn-Cal" : [
        ["Date","Day","Event"],
        ["09/27/2023", "Wednesday", "Individual PD"],
        ["09/28/2023", "Thursday", "Junior Class Mass"],
        ["10/04/2023", "Wednesday", "Faculty Meeting Student Center"],
        ["10/05/2023", "Thursday", "Faculty / Staff Portraits Retake 6a - 9a Pines<br>Underclassman Picture Retake<br>STEM Night"],
        ["10/06/2023", "Friday",  "No School<br>Teacher PD<br>End of 1st Quarter"],
        ["10/09/2023", "Monday", "Homecoming Week Starts"],
        ["10/11/2023", "Wednesday", "Department PLC - Use UDL to plan Quarter 2 lessons"],
        ["10/12/2023", "Wednesday", "Freshman Class Mass"],
        ["10/13/2023", "Friday", "Pep Rally 7:45a - 8:45a"],
        ["10/14/2023", "Saturday", "Homecoming Dance 7:00 pm - 11:15 pm"],
        ["10/18/2023", "Wednesday", "Common Course PLC - Use UDL to plan Quarter 2 lessons"],
        ["10/19/2023", "Thursday", "Sophomore Class Mass"],
        ["10/20/2023", "Friday", "No School (Regional PD)"],
        ["10/25/2023", "Wednesday", "Individual PD"],
        ["10/26/2023", "Thursday", "Freshman Class Mass"],
        ["11/01/2023", "Wednesday", "BMC All School Mass<br>All Saints Day"],
        ["11/05/2023", "Sunday", "Open House"],
        ["11/08/2023", "Wednesday", "Department PLC Developing Collaborative Commmon-Course Exams"],
        ["11/11/2023", "Saturday", "The Legacy Gala"],
        ["11/15/2023", "Wednesday", "Common Course PLC Developing Collaborative Commmon-Course Exams"],
        ["11/20/2023 - 11/24/2023", "Monday – Friday", "No School - Thanksgiving Break<br>Monday and Tuesday are Hurricane Makeup Days"],
        ["11/29/2023", "Wednesday", "Individual PD"],
        ["12/06/2023", "Wednesday", "Faculty Meeting Student Center"],
        ["12/08/2023", "Friday", "BMC All School Mass<br>The Immaculate Conception"],
        ["12/12/2023", "Tuesday", "Semester Exams:<br>Period ?: 8:00am - 9:30am<br>Period ?: 10:00am - 11:30am"],
        ["12/13/2023", "Wednesday", "Semester Exams:<br>Period ?: 8:00am - 9:30am<br>Period ?: 10:00am - 11:30am"],
        ["12/14/2023", "Thursday", "Semester Exams:<br>Period ?: 8:00am - 9:30am<br>Period ?: 10:00am - 11:30am"],
        ["12/15/2023", "Friday", "Semester Exams:<br>Period ?: 8:00am - 9:30am<br>Period ?: 10:00am - 11:30am<br>End of Quarter 2 - End of Semester 1"],
        ["12/18/2023 - 12/29/2023", "Monday – Friday", "No School - Christmas Break"],
        ["01/01/2024 - 01/02/2024", "Monday – Tuesday", "No School"],
        ["01/03/2024", "Wednesday", "2nd Semester Begins"],
        ["01/15/2024", "Monday", "No School (Martin Luther King Jr.)"],
        ["01/29/2024", "Monday", "All Campus Mass with Bishop<br>Catholic Schools Week"],
        ["02/04/2024", "Sunday", "Grandparents Day Celebration"],
        ["02/14/2024", "Wednesday", "BMC All School Mass<br>Ash Wednesday"],
        ["02/16/2024", "Friday", "No School (Regional PD)"],
        ["02/19/2024", "Monday", "No School (Presidents’ Day)"],
        ["02/23/2024", "Friday", "Noon Dismissal"],
        ["03/06/2024", "Wednesday", "Noon Dismissal"],
        ["03/07/2024", "Thursday", "Senior Class Mass"],
        ["03/08/2024", "Friday", "End of 3rd Quarter"],
        ["03/14/2024", "Thursday", "Junior Class Mass"],
        ["03/18/2024 - 03/22/2024", "Monday – Friday", "No School - Spring Break"],
        ["03/28/2024 - 04/01/2024", "Thursday – Monday", "No School - Easter Break"],
        ["04/11/2024", "Thursday", "Sophomore Class Mass"],
        ["04/25/2024", "Thursday", "Freshman Class Mass"],
        ["05/13/2024", "Monday", "Awards Ceremony"],
        ["05/23/2024", "Thursday", "No School - Baccalaureate Mass & Graduation"],
        ["05/27/2024", "Monday", "No School (Memorial Day)"],
        ["05/28/2024", "Tuesday", "Semester Exams:<br>Period ?: 8:00am - 9:30am<br>Period ?: 10:00am - 11:30am"],
        ["05/29/2024", "Wednesday", "Semester Exams:<br>Period ?: 8:00am - 9:30am<br>Period ?: 10:00am - 11:30am"],
        ["05/30/2024", "Thursday", "Semester Exams:<br>Period ?: 8:00am - 9:30am<br>Period ?: 10:00am - 11:30am"],
        ["05/31/2024", "Friday", "Semester Exams:<br>Period ?: 8:00am - 9:30am<br>Period ?: 10:00am - 11:30am<br>End of Semester"],
        ["***OLDER**", "*OLD*", "**********OLDER EVENTS***********"],
        ["04/24/2023", "Monday", "Spring Art Show - Cancelled for Weather"],
        ["04/25/2023", "Tuesday", "Junior Class Mass<br>Spring Art Show 5pm - 7pm<br>Shrek the Musical 7:30pm - 9:00pm"],
        ["04/26/2023", "Wednesday", "Shrek the Musical 7:30pm - 9:00pm"],
        ["04/27/2023", "Thursday", "Shrek the Musical 7:30pm - 9:00pm"],
        ["04/28/2023", "Friday", "Grad Nite 3:00pm - 12:00am"],
        ["05/01/2023", "Monday", "AP Testing:<br>8am-United States Government and Politics (Dome) <br>12pm-Chemistry (Dome)<br>12pm-Spanish Literature and Culture (Dome C)<br>11:59pm Deadline for AP CSP Performance Task"],
        ["05/02/2023", "Tuesday", "AP Testing:<br>8am-Environmental Science (Dome)<br>12pm-Psychology (Dome)"],
        ["05/03/2023", "Wednesday", "AP Testing:<br>8am-English Literature and Composition (Gym)<br>12pm-Comparative Government and Politics (Dome W)<br>12pm-Computer Science A (Dome)"],
        ["05/04/2023", "Thursday", "AP Testing:<br>8am-Human Geography (Dome)<br>8am-Macroeconomics (Dome W)<br>12pm-Statistics (Gym)"],
        ["05/05/2023", "Friday", "AP Testing:<br>8am-European History (Dome C)<br>8am-United States History (Dome and Gym)<br>12pm-Microeconomics (Dome)"],
        ["05/08/2023", "Monday", "AP Testing:<br>8am-Calculus AB (Dome)<br>8am-Calculus BC (Dome)<br>12pm-Computer Science Principles (Dome)"],
        ["05/09/2023", "Tuesday", "AP Testing:<br>8am-English Language and Composition (Dome)<br>12pm-Physics C: Mechanics (Dome)<br>2pm-Physics C: Electricity and Magnetism (Dome)"],
        ["05/10/2023", "Wednesday", "AP Testing:<br>8am-Spanish Language and Culture (Dome C)<br>12pm-Biology (Dome)"],
        ["05/11/2023", "Thursday", "AP Testing:<br>8am-French Language and Culture (Dome C)<br>8am-World History: Modern (Dome)<br>12pm-Physics 1: Algebra-Based (Dome)"],
        ["05/12/2023", "Friday", "AP Testing:<br>8am-Music Theory (Dome)<br>12pm-Latin<br>12pm-Physics 2: Algebra-Based"],
        ["05/13/2023", "Saturday", "Hornet Expo (previously known as Freshmen Fair) 7:45am - 11:45am in Dome"],
        ["05/15/2023", "Monday", "Baccalaureate Practice/Teaching Mass for Seniors 9:45am<br>Awards Ceremony 6:30pm - 8pm"],
        ["05/16/2023", "Tuesday", "Fire Drill:<br>Period 1: Bishop Borders/Bishop Grady/Cafeteria<br>Period 2:Dorsey/Dome/Moore Center<br>Period 3: Loretta/MM/Gym<br>Lockdown drill in afternoon<br>Spring Band Concert 7:05pm"],
        ["05/17/2023", "Wednesday", "Senior Yearbook Distribution in Dome during lunch periods<br>Faculty Meeting Student Center"],
        ["05/18/2023", "Thursday", "Underclassmen Yearbook Distribution in Dome during religion class<br>Junior Class Presentation 7th & 8th Periods<br>Spring Football Game 7pm<br>Spring Choir Concert 7pm"],
        ["05/19/2023", "Friday", "Senior Grades Due"],
        ["05/22/2023", "Monday", "Senior Mass and Yearbook Signing 9am"],
        ["05/23/2023", "Tuesday", "Senior Parade 8:30am<br>Seniors dismissed at 2pm"],
        ["05/24/2023", "Wednesday", "Last due date for Test/AA<br>Senior Luncheon 12pm<br>Summer AP Assignments Due<br>Faculty Individual PD"],
        ["05/25/2023", "Thursday", "No School - Baccalaureate and Graduation 9am and 2pm"],
        ["05/26/2023", "Friday", "Turning the Page - All School Assembly"],
        ["05/29/2023", "Monday", "No School - Memorial Day Holiday"],
        ["05/30/2023", "Tuesday", "Semester Exams:<br>Period 3: 8:00am - 9:30am<br>Period 6: 10:00am - 11:30am<br>Faculty Walking Together - Teal A 12pm - 1pm"],
        ["05/31/2023", "Wednesday", "Semester Exams:<br>Period 7: 8:00am - 9:30am<br>Period 4: 10:00am - 11:30am"],
        ["06/01/2023", "Thursday", "Semester Exams:<br>Period 1: 8:00am - 9:30am<br>Period 8: 10:00am - 11:30am"],
        ["06/02/2023", "Friday", "Semester Exams:<br>Period 2: 8:00am - 9:30am<br>Period 5: 10:00am - 11:30am<br>End of Semester<br>Last Day of School"],
        ["06/05/2023", "Monday", "8:00am Breakfast<br>8:30am Wrap-up meeting<br>9:00am - 12:00am Work on grades, classroom cleanup, inventory list, checklist<br>12:00pm Grades due<br>12:30pm Faculty BBQ"],
        ["06/06/2023", "Tuesday", "Classroom cleanup, inventory list, checklist"],
        ["06/07/2023", "Wednesday", "Summer School Begins"],
        ["06/19/2023", "Monday", "No School - Juneteenth - Office Closed"],
        ["06/30/2023", "Friday", "Summer School Ends"],
        ["07/04/2023", "Tuesday", "Independence Day - Office Closed"],
        ["07/31/2023", "Monday", "Classrooms open<br>Optional Mass 9a St. Joseph's Chapel"],
        ["08/01/2023", "Tuesday", "Student Center 7:30 am continental breakfast<br>AED and CPR training 8a (Rotating groups)<br>Moore Center lunch 11:30a"],
        ["08/02/2023", "Wednesday", "Faculty / Staff Yearbook Portraits 6a - 9a Pines<br>New Student Orientation 7:30a - 2p"],
        ["08/03/2023", "Thursday", "Faculty retreat 8a at San Pedro"],
        ["08/04/2023", "Friday", "Transfer Student Orientation"],
        ["08/07/2023", "Monday", "Diocesan Kick-Off 8a at Holy Family Catholic Church 5125 S Apopka Vineland Rd"],
        ["08/09/2023", "Wednesday", "First Day of School"],
        ["08/11/2023", "Friday", "Fire Drill"],
        ["08/14/2023", "Monday", "Lockout Drill"],
        ["08/15/2023", "Tuesday", "All Campus Mass with Bishop<br>The Assumption of Mary"],
        ["08/17/2023", "Thursday", "Underclassman Picture Day - 9th, 10th, 11th during English Class"],
        ["08/22/2023", "Tuesday", "Lockdown Drill"],
        ["08/23/2023", "Wednesday", "Freshman Parent Night 6pm"],
        ["08/24/2023", "Thursday", "Shelter Drill<br>Senior CAP day 1st - 3rd"],
        ["08/25/2023", "Friday", "Pep Rally<br>Spirit Day Dress-Down"],
        ["08/28/2023", "Monday", "Freshman Retreat - Girls"],
        ["08/29/2023", "Tuesday", "Freshman Retreat - Boys<br>Transfer Breakfast"],
        ["08/30/2023", "Wednesday", "Honor Roll Breakfast<br>Walking Together 2:30pm Student Success Center"],
        ["09/01/2023", "Friday", "Fire Drill<br>Period 1 - Loretta/MM/Gym<br>Period 2 - Bishop Borders/Bishop Grady, Cafeteria<br>Period 3 - Dorsey, Dome, Moore Center"],
        ["09/04/2023", "Monday", "No School - Labor Day"],
        ["09/06/2023", "Wednesday", "Faculty Meeting 2:30pm Student Center"],
        ["09/13/2023", "Wednesday", "Department PLC 2022-23 and 2023-24 ACT Goals"],
        ["09/14/2023", "Thursday", "Senior Class Mass"],
        ["09/19/2023", "Tuesday", "Back to School Night 6 pm - 7:30 pm"],
        ["09/20/2023", "Wednesday", "Common Course PLC Apply HSPT, PACT, and ACT data analysis and 2023-24"],
    ],                            
}

// Global State Variable to know if Calendar is being shown
//     Need to disable period highlighting
currentButton = "";

// Respond to topnav menu button clicked 
function navClick(btnClicked) {
    // Change active button to button clicked
    activeButtons = document.getElementsByClassName("active");
    activeButtons[0].classList.remove("active"); //Only 1 item should be returned
    document.getElementById(btnClicked).classList.add("active");
    
    // Build table corresponding to button id clicked
    currentButton = btnClicked;
    buildTable(data[btnClicked]);
    setInterval(updateScreen, 1000);
}

// Generic build table from data array
function buildTable(tableArr) {
    // Remove existing schedule
    schedule = document.getElementById("schedule");
    schedule.innerHTML = "";
    const [headings, ...rows] = tableArr;
    tableString = '<table id="schedTable"><thead>';
    for (let header of headings) {
        tableString += "<th>" + header + "</th>";
    }
    tableString += "</thead><tbody>"

    for (let aRow of rows) {
        tableString += "<tr>";
        for (let cell of aRow) {
            tableString += "<td>" + cell + "</td>";
        }
        tableString += "</tr>";
    }
    tableString += "</tbody></table>";
    schedule.innerHTML = tableString;
}

// Helper function for updateScreen()
function getDate(timeStr) {
    timeStr = timeStr.trim();
    let now = new Date();
    let hr = parseInt(timeStr.split(":")[0]);
    let mi = parseInt((timeStr.split(":")[1]).split(" ")[0]);
    let meridiem = timeStr.split(" ")[1];
    if (meridiem == "pm" && hr < 12) {
        hr = hr + 12;
    } 
    now.setHours(hr, mi, 0, 0);
    return now;
}

// Updates Screen every second for clock and highlighting the period
function updateScreen() {
    // Get current time - need seconds
    let now = new Date();

    // Update Clock
    const timeDiv = document.getElementById("time");
    const dateString = now.toLocaleString('en-US');
    timeDiv.innerHTML = "<h2>CLOCK: " + dateString + "</h2>";

    if (currentButton == "btn-Cal")
        return;
        
    // Get table to highlight current period
    let table = document.getElementById("schedTable");

    // Highlight Current Period
    for (var r = 1, n = table.rows.length; r < n; r++) {
        let startStr = table.rows[r].cells[1].innerHTML;
        let startTime = getDate(startStr)
        let endStr = table.rows[r].cells[2].innerHTML;
        let endTime = getDate(endStr);
        // console.log(startTime, now, endTime);
        if (startTime <= now && now <= endTime) {
            // console.log("Row:", r);
            table.rows[r].cells[0].style.color = 'red';
            table.rows[r].cells[0].style.backgroundColor = 'Cornsilk';
            table.rows[r].cells[1].style.color = 'red';
            table.rows[r].cells[1].style.backgroundColor = 'Cornsilk';
            table.rows[r].cells[2].style.color = 'red';
            table.rows[r].cells[2].style.backgroundColor = 'Cornsilk';
            table.rows[r].cells[3].style.color = 'red';
            table.rows[r].cells[3].style.backgroundColor = 'Cornsilk';
            table.rows[r].cells[4].style.color = 'black';
            table.rows[r].cells[4].style.backgroundColor = 'aqua';
            if (r > 1) {
                table.rows[r-1].cells[4].style.color = 'black';
                table.rows[r-1].cells[4].style.backgroundColor = 'aqua'; 
            }
        }
    }
    // Highlight if in passing between periods
    for (var r = 1, n = table.rows.length; r < n-1; r++) {
        let startStr = table.rows[r].cells[2].innerHTML;
        let startTime = getDate(startStr)
        let endStr = table.rows[r+1].cells[1].innerHTML;
        let endTime = getDate(endStr);
        // console.log(startTime, now, endTime);
        if (startTime <= now && now <= endTime) {
            // console.log("Row:", r);
            table.rows[r].cells[4].style.color = 'red';
            table.rows[r].cells[4].style.backgroundColor = 'Cornsilk';
            table.rows[r].cells[3].style.color = 'black';
            table.rows[r].cells[3].style.backgroundColor = 'aqua';
            table.rows[r].cells[2].style.color = 'black';
            table.rows[r].cells[2].style.backgroundColor = 'aqua';
            table.rows[r].cells[1].style.color = 'black';
            table.rows[r].cells[1].style.backgroundColor = 'aqua';
            table.rows[r].cells[0].style.color = 'black';
            table.rows[r].cells[0].style.backgroundColor = 'aqua';
        }
    }
}

// Determine default button on startup
let day = new Date();

if (day.toLocaleDateString('en-Us') == "8/9/2023")
    document.getElementById("btn-wBless").click();
else if (day.toLocaleDateString('en-Us') == "8/15/2023")
    document.getElementById("btn-d001").click();
else if (day.toLocaleDateString('en-Us') == "8/25/2023")
    document.getElementById("btn-pep").click();
else if (day.toLocaleDateString('en-Us') == "9/8/2023")
    document.getElementById("btn-d001").click();
else if (day.toLocaleDateString('en-Us') == "9/14/2023")
    document.getElementById("btn-classMass").click();
else if (day.toLocaleDateString('en-Us') == "9/28/2023")
    document.getElementById("btn-classMass").click();
else if (day.toLocaleDateString('en-Us') == "10/13/2023")
    document.getElementById("btn-pep").click();
else if (day.toLocaleDateString('en-Us') == "10/19/2023")
    document.getElementById("btn-classMass").click();
else if (day.toLocaleDateString('en-Us') == "10/26/2023")
    document.getElementById("btn-classMass").click();
else if (day.toLocaleDateString('en-Us') == "11/1/2023")
    document.getElementById("btn-allMass").click();
else if (day.toLocaleDateString('en-Us') == "12/8/2023")
    document.getElementById("btn-allMass").click();
else if (day.toLocaleDateString('en-Us') == "1/29/2024")
    document.getElementById("btn-campMass").click();
else if (day.toLocaleDateString('en-Us') == "2/14/2024")
    document.getElementById("btn-allMass").click();
else if (day.toLocaleDateString('en-Us') == "3/7/2024")
    document.getElementById("btn-classMass").click();
else if (day.toLocaleDateString('en-Us') == "3/14/2024")
    document.getElementById("btn-classMass").click();
else if (day.toLocaleDateString('en-Us') == "4/11/2024")
    document.getElementById("btn-classMass").click();
else if (day.toLocaleDateString('en-Us') == "4/25/2024")
    document.getElementById("btn-classMass").click();
else if (day.getDay() == 3)
    document.getElementById("btn-Wed").click();
else
    document.getElementById("btn-MF").click();

