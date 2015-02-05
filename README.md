#Tasks Demonstration App

The purpose of this application is to analize the flow and structure of a front end project.

A task is a piece of work to be done or undertaken to be completed within a defined period of time or as part of a project. As a user, I want to maintain a set of tasks so that I can understand the work to be done. To accomplish this the following minimum set of user stories needs to be completed, with others adding to the experience.

##Getting Started
Start by cloning this repository, and from the command line:
```sh
npm install
bower install
gulp
``` 

##User Stories & Acceptance Criteria
User stories are short, simple descriptions from the perspective of the person who desires the feature. Acceptance criteria are high-level requirements that will be true after the user story is complete.

1. As a user, I want to add a task, so added tasks are displayed in a list.
  * The task will indicate the date of creation.
  * The user can view the "add a task" widget at all times.
  * The user can clear the added description in the "add a task" at anytime before saving the task.
  * The task description can be up to 512 characters.
  * A character count is visible while typing to indicate character count versus maximum character count.
  * A progress indicator is displayed while adding the task with the server.
![add a task wireframe](http://toddbadams.github.io/img/addtask.svg)

2. As a user, I want an action menu on each task so that I can interact with the task.
  * The menu slides out of the side of the task when the action menu button is pressed.
  * The menu hides itself when selecting any of the action items, or other task buttons.
![action menu wireframe](http://toddbadams.github.io/img/actionmenu.svg)

3. As a user, I want to edit a task description so that the task list is flexible.
  * The edit view is presented through an action menu on each task.
  * The total character count and current count is displayed while editing.
  * The editor does not allow the description to be too long.
  * The editor requires a description of at least one character.
  * The user can cancel the operation returning to the unedited version.
  * The task description can be up to 512 characters.
  * A character count is visible while typing to indicate character count versus maximum character count.
  * A progress indicator is displayed while updating the task with the server.
![edit task wireframe](http://toddbadams.github.io/img/edittask.svg)

4. As a user, I want to delete a task so that unnecessary tasks are removed.
  * A delete confirmation message is presented through the action menu.
  * The delete confirmation message is displayed as a dialog, greying out everything in the background.
  * The delete confirmation message provides two options: confirm delete, and cancel.
  * A progress indicator is displayed while deleting the task from the server.
![delete task wireframe](http://toddbadams.github.io/img/deletetask.svg)

5. As a user, I want to have the ability to differentiate my tasks by color.
  * Each task can select red, green, or blue from the task's action menu.
  * Choosing a color shades the task, repeating the same color choice removes the shading.

6. As a user, I want to mark my tasks as complete or incomplete, so that I and others can view status.
  * A box at the head of the task will indicate complete or incomplete status
  * Clicking the box toggles the complete/incomplete status.
  * Date of completion is added to the task when completed.
![complete task wireframe](http://toddbadams.github.io/img/complete.svg)

