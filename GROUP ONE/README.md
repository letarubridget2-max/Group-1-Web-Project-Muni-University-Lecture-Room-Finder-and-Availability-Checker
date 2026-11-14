# Lecture Room Finder and Availability Checker

**ITM 1131 – Web Application Development | Group 1 | Muni University**

A responsive front-end web application that helps students, lecturers, and administrators find lecture rooms, check sample availability for a chosen date and period, and get recommendations for rooms that suit a class size.

- **Live application:** [ADD DEPLOYED LINK]
- **GitHub repository:** [ADD REPOSITORY LINK]

---

## 1. Problem Statement

Finding a free lecture room of the right size and with the right facilities is often slow and uncertain. Students do not know where a class is held or whether a room is free, lecturers struggle to find a room that fits their class size and equipment needs, and administrators have no simple way to compare rooms quickly.

This application brings room details and sample availability into one searchable interface so users can make quick, informed decisions.

## 2. Intended Users

| User | How they use the application |
|------|------------------------------|
| **Students** | Look up rooms by name or building and check whether a room is free for a study group or class. |
| **Lecturers** | Find rooms that match their class size and required facilities (e.g. projector, whiteboard). |
| **Administrators** | Compare capacity against class size and review availability when scheduling. |

## 3. Features

- **Room directory:** at least eight sample rooms shown as cards, each with building, capacity, facilities, and sample availability.
- **Search:** search by room name or building.
- **Filters:** filter by minimum capacity and by facility.
- **Availability checker:** choose a date and period to see which rooms are available or occupied (sample data).
- **Capacity comparison and recommendation:** enter the expected class size and the app compares it with each room's capacity and recommends suitable rooms.
- **Validated form:** the availability/recommendation form uses suitable input types (date, number, select) with visible error and success messages.
- **Clear states:** empty-result, success, and error messages are shown where appropriate.
- **Responsive design:** layouts adapt to mobile, tablet, and desktop screens.
- **Accessible:** semantic HTML, labelled form controls, alternative text, and keyboard-friendly controls.

## 4. Pages / Sections

> Update this list to match your final structure.

1. **Home / Overview:** introduction to the tool and quick links.
2. **Rooms:** searchable and filterable list of lecture rooms.
3. **Availability Checker:** date, period, and class-size form with results and recommendations.

## 5. Technologies Used

- HTML5 (semantic elements)
- CSS3 (external stylesheet, reusable classes, Flexbox, CSS Grid, global `box-sizing: border-box`)
- Vanilla JavaScript (browser-side processing with sample data)
- Git and GitHub for version control and collaboration
- [ADD HOSTING PLATFORM, e.g. GitHub Pages] for deployment

## 6. Key JavaScript Functions

> Replace these with the actual function names in your code.

| Purpose | Function | Description |
|---------|----------|-------------|
| Search / filter | `filterRooms()` | Filters rooms by name, building, capacity, and facility. |
| Comparison / summary | `recommendRooms()` | Compares class size with room capacity and returns suitable rooms. |
| User action | `checkAvailability()` | Validates the form and shows room availability for the selected date and period. |

## 7. Project Structure

> Adjust to match your repository.

```
lecture-room-finder/
├── index.html
├── rooms.html
├── availability.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── images/
└── README.md
```

## 8. How to Run Locally

1. Clone the repository:
   ```bash
   git clone [ADD REPOSITORY LINK]
   ```
2. Open the project folder.
3. Open `index.html` in a web browser (or use a local server such as the VS Code Live Server extension).

No installation, database, or server is required.

## 9. Sample Data

All room records, buildings, capacities, facilities, and availability are **invented sample data**. No real confidential student or staff information is used, and no passwords, financial details, or medical information are collected.

## 10. Testing Evidence

| Screen size | Width tested | Result | Evidence |
|-------------|--------------|--------|----------|
| Mobile | [e.g. 375px] | [Pass/Fail] | [screenshot link/path] |
| Tablet | [e.g. 768px] | [Pass/Fail] | [screenshot link/path] |
| Desktop | [e.g. 1366px] | [Pass/Fail] | [screenshot link/path] |

Other checks carried out: accessibility (keyboard navigation, labels, alt text), working links, form validation, and capacity/availability calculations.

## 11. Limitations

- Uses sample data only; availability is not connected to a real timetable or booking system.
- No database, login/authentication, or server-side processing.
- Room bookings are not saved permanently; data resets when the page is refreshed.
- Availability results are for demonstration purposes and do not reflect real room usage.

## 12. Future Improvements

- Connect to a real timetable or database.
- Add user accounts for lecturers and administrators.
- Allow actual room booking with confirmation.
- Add a campus map showing room locations.

## 13. Team Members and Responsibilities

| # | Name | Registration No. | Responsibilities |
|---|------|------------------|------------------|
| 1 | [LETARU BRIDGET] | [2601200800] |  HTML structure and content] |
| 2 | [EREMA JOEL] | [2601200838] | [CSS styling and responsive layout] |
| 3 | [ESUKU SETI] | [Reg. No.] | [JavaScript search and filtering] |
| 4 | [EMMANUEL GIFT] | [Reg. No.] | [Availability checker and form validation] |
| 5 | [Name] | [Reg. No.] | [e.g. Testing, README, and deployment] |

> Add or remove rows to match your group.

## 14. Contribution Statements

Each member has written a short statement describing their own contribution. Commit history on GitHub provides additional evidence of balanced participation.

- **[Member 1]:** [Short statement]
- **[Member 2]:** [Short statement]
- **[Member 3]:** [Short statement]
- **[Member 4]:** [Short statement]
- **[Member 5]:** [Short statement]

## 15. Acknowledgements and Reused Resources

> List every external resource, library, icon set, font, image, tutorial, or reused code snippet. If none were used, say so.

- [e.g. Google Fonts – font name]
- [e.g. Icons from ...]
- [e.g. Code snippet adapted from ... (link)]

## 16. Academic Integrity

The code in this repository was developed and is understood by the group. Any external resources or reused code are acknowledged above.

---

*ITM 1131 – Web Application Development, Muni University*
