# Lecture Room Finder and Availability Checker

**ITM 1131 – Web Application Development | Group 1 | Muni University**

A responsive front-end web application that helps students, lecturers, and administrators find lecture rooms, check sample availability for a chosen date and period, and get recommendations for rooms that suit a class size.

- **Live application:** https://letarubridget2-max.github.io/itm7131-group01-Lecture-room-finder-and-availability-checker/
- **GitHub repository:** https://github.com/letarubridget2-max/itm7131-group01-Lecture-room-finder-and-availability-checker.git

---

## 1. Problem Statement

Finding a free lecture room of the right size and with the right facilities is often slow and uncertain. Students do not know where a class is held or whether a room is free, lecturers struggle to find a room that fits their class size and equipment needs, and administrators have no simple way to compare rooms quickly.

This application brings room details and sample availability into one searchable interface so users can make quick, informed decisions.

## 2. Intended Users

| User               | How they use the application |
|--------------------|------------------------------|
| **Students**       | Look up rooms by name or building and check whether a room is free for a study group or class. |
| **Lecturers**      | Find rooms that match their class size and required facilities (e.g. projector, whiteboard). |
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

1. **Search & Filter Rooms:** introduction to the tool and quick links.
2. **Available Rooms:** searchable and filterable list of lecture rooms.
3. **Room Recommender & Availability Checker:** date, period, and class-size form with results and recommendations.

## 5. Technologies Used

- HTML5 (semantic elements)
- CSS3 (external stylesheet, reusable classes, Flexbox, CSS Grid, global `box-sizing: border-box`)
- Vanilla JavaScript (browser-side processing with sample data)
- GitHub for collaboration

## 6. Key JavaScript Functions

| Purpose              | Function | Description |
|----------------------|----------|-------------|
| Search / filter      | `filter Rooms()` | Filters rooms by name, building, capacity, and facility. |
| Comparison / summary | `recommendRooms()` | Compares class size with room capacity and returns suitable rooms. |
| User action | `check Availability()` | Validates the form and shows room availability for the selected date and period. |

## 7. Project Structure

lecture-room-finder/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── README.md

## 8. How to Run Locally

1. Clone the repository:
   ```bash
   git clone [https://github.com/letarubridget2-max/Group-1-Web-Project-Muni-University-Lecture-Room-Finder-and-Availability-Checker.git]
   ```
2. Open the project folder.
3. Open `index.html` in a web browser (or use a local server such as the VS Code Live Server extension).

## 9. Testing Evidence

| Screen size | Width tested | Result | 
|-------------|--------------|--------|
| Mobile S    | 320px        | Pass   | 
| Tablet      | 768px        | Pass   | 
| Laptop      | 1024px       | Pass   |

## 10. Team Members and Responsibilities

| # | Name                             | Registration No.       |    Responsibilities |
|---|--------------------------------- |------------------------|------------------|
| 1 | LETARU BRIDGET                   | 2601200800             |  HTML structure and content |
| 2 | EREMA JOEL                       | 2601200838             | CSS styling and responsive layout |
| 3 | ESUKU SETI                       | 2601200818             | JavaScript search and filtering |
| 4 | EMMANUEL GIFT                    | 2601200817             | JavaScript search and filtering |
| 5 | EREMA JOEL & LETARU BRIDGET      | 2601200838 & 2601200800| Testing, README, and deployment |

## 11. Contribution Statements

Each member has written a short statement describing their own contribution. Though some members lacked laptops, one laptop was used to handle HTML, CSS and javascript Commit history on GitHub provides additional evidence of balanced participation.

- **LETARU BRIDGET:** Built the core HTML5 semantic page structure and navigation layout, and managed repository setup.
- **EREMA JOEL:** Designed and implemented responsive CSS styling, typography, and mobile breakpoints across all pages.
- **ESUKU SETI:** JavaScript search and filtering.
- **EMMANUEL GIFT:** JavaScript search and filtering.
- **EREMA JOEL & LETARU BRIDGET:** Tested the live application link, created the README.

## 12. Acknowledgements and Reused Resources

-No external resources, libraries, icon sets, fonts, images were used in this project.

-Tutorials and reference websites were used in this project.

- Ai (was utilised at some point for guidance)

- **Tutorials & Reference Websites:** 
  - **W3Schools** https://w3schools.com – Referenced for HTML5/CSS3 syntax.
  - **JavaScript tutorial** https://www.javascripttutorial.net/ - Referenced for JavaScript syntax.
    
## 13. Academic Integrity

The code in this repository was developed and is understood by the group. Any external resources or reused code are acknowledged above.

---

*ITM 1131 – Web Application Development, Muni University*
