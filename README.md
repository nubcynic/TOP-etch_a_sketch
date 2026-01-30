# PROJECT : ETCH A SKETCH 💼
This is the documentation for The Odin Project's Foundation Course project named Etch A Sketch. This ReadMe file provides detailed information about the project and its features.

## Table Of Content 📖
- [Introduction](##Introduction)
- [Features](##Features)
- [Project Guidelines](##Project-Guidelines)
- [Technology Used](##Technology-Used)
- [Images and Links](##Images-and-Links)
- [Future Scope](##Future-Scope)
- [Acknowledgement](##Acknowledgement)
- [Conclusion](##Conclusion)

## Introduction 📝
This project (Etch a Sketch) aims to test our DOM manipulation skills by building somewhat of a sketch pad in the browser. It is a a part of The Odin Project's Foundational Course curriculum.
You will create a canvas of fixed size. The canvas will have small square blocks that form a grid structure where the user creates art using random colors.

## Features 💡
This project has following notable features:
- A button to choose preferred square grids.
- Random background color on the square grids upon mouse hover

## Project Guidelines 🎏
Here are the project rules and guidelines to follow:
- You require separate files each for HTML, CSS and JS. CSS and JS files is linked to the HTML.
- Create only a large square div of fixed size inside HTML. Everything else will be done via js to implement DOM Manipulation.
### Phase-1:
- Create smaller square divs that perfectly fit inside the large square div.
- The smaller square divs have 16*16 grid structure.
- Use only CSS flexbox technique. Borders and margins affect the actual size of divs, use appropriate css property for that.
- Set up hover effect. The smaller square divs change to another color when mouse hovers over it.
### Phase-2:
- Create a button at the top. The button will have appropriate text as well.
- Clicking on the button should pop up a prompt for the user. They can choose their preferred grid size between the range of 12-64.
- Irrespective of the grid size chosen, the smaller square divs should perfectly fit inside.
- On page load, by default, the grid size is 16*16 unless changed by the user. When changed, the previous grid structure is first removed.
- Any new/old grids should have the hover effect.
### Phase-3: 
- On mouse hover, the colors are randomly selected rather than predetermined colors
- Implement progressive darkening effect. Each hover over the square block darkens that square by 10% till it is completely black.

## Technlogy Used 💻
- HTML, CSS, JavaScript

### Images and Links 🔗


## Future Scope 📝
1. A color slider at the side so that the user chooses the color they wish to fill on the square boxes
2. A brightness slider so that the user can choose their own opacity level for the color they choose
3. A reset feature that only cleans up the canvas without changing the grid sizing

## Acknowledgement 🐵
- [The Odin Project](https://www.theodinproject.com/lessons/foundations-etch-a-sketch) for the curriculum
- [DuckDuckGo & Duck AI](https://duck.ai/chat?t=ffab&q=chatgpt) for doubt clearance and project help

## Conclusion 👀
All in all, a fun project to implement DOM skills. It was quite challenging. If you wish to know more, feel free to explore.
