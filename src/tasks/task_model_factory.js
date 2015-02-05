(function(angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name ls.service:lsTaskModel
     *
     * @description
     * Creates a task models from objects.
     *
     */
    angular.module('ls').factory('lsTaskModel', factory);
    factory.$inject = ['$timeout', 'lsModelsBase', 'lsDateService'];

    function factory($timeout, lsModelsBase, lsDateService) {
        var _service = {
            create: create,
            createArrayFromApi: createArrayFromApi
        };

        /**
         * convert incomming data from API to an array of Task
         * @param  {Array} arr array of objects
         * @return {Array}     array of Task
         */
        function createArrayFromApi(arr, updateMethods) {
            return lsModelsBase.createModelArray(arr, createModelFromApi, updateMethods);
        }


        /**
         * convert incomming data from API to an appointment task model
         * @param  {object} data      incomming data from API
         * @return {Task}      an appointment task model
         */
        function createModelFromApi(data, updateMethods) {
            var _m = new Task();

            _m.id = data.id;
            _m.appointmentId = data.appointmentId;
            _m.note = data.note;
            _m.editNote = _m.note;
            _m.entered = data.entered;
            _m.enteredBy = data.enteredBy;
            _m.completed = data.completed ? data.completed : null;
            _m.completedBy = data.completedBy;
            _m.status = 'entered on ' + moment.unix(_m.entered).format('MMM D YYYY') + ' by ' + _m.enteredBy;
            _m.markCompleteAsync = function() {
                return updateMethods.markCompleteAsync(_m);
            };
            _m.markIncompleteAsync = function() {
                return updateMethods.markIncompleteAsync(_m);
            };
            _m.updateNoteAsync = function(note) {
                return updateMethods.updateNoteAsync(_m, note);
            };
            _m.deleteAsync = function() {
                return updateMethods.deleteAsync(_m.id);
            };
            _m.colorRedAsync = function() {
                return updateMethods.colorRedAsync(_m);
            };
            _m.colorGreenAsync = function() {
                return updateMethods.colorGreenAsync(_m);
            };
            _m.colorBlueAsync = function() {
                return updateMethods.colorBlueAsync(_m);
            };
            return _m;
        }


        function create(appointmentId, entered, enteredBy, note, updateMethods) {
            return createModelFromApi({
                id: null,
                appointmentId: appointmentId,
                note: note,
                entered: entered,
                enteredBy: enteredBy
            }, updateMethods);
        }

        function Task() {
            // id - GUID
            this.id = '';

            // appointmentId - GUID of the parent appointment
            this.appointmentId = 0;

            // note - A 512 character not describing the task
            this.note = '';

            // editNote - stores the note while editing
            this.editNote = '';

            // entered - A Unix time stamp when task was added
            this.entered = 0;

            // enteredBy - the full name of the user who entered the task
            this.enteredBy = '';

            // completedDate - A Unix timestamp when complete (null if not complete)
            this.completedDate = null;

            // completed - true if task is complete
            this.completed = false;

            //completedBy - the full name of the user who completed the task
            this.completedBy = '';

            // status  - a status message “entered {enter date} by {entered user},
            //           completed on {complete date } by {complete date}”
            this.status = '';

            // async method to mark this task as completed
            this.markCompleteAsync = null;

            // async method to mark this task as incompleted
            this.markIncompleteAsync = null;

            // async method to update this task's note
            this.updateNoteAsync = null;

            // async method to delete this task
            this.deleteAsync = null;
        }

        Task.prototype.setComplete = function(date, by) {
            var _self = this;
            _self.completedDate = date;
            _self.completedBy = by;
            updateStatus(_self);
            return this;
        };

        Task.prototype.setIncomplete = function() {
            var _self = this;
            _self.completedDate = null;
            _self.completedBy = null;
            updateStatus(_self);
            return this;
        };

        Task.prototype.setNote = function() {
            var _self = this;
            _self.note = _self.editNote;
            updateStatus(_self);
            return this;
        };

        Task.prototype.setColor = function(color) {
            var _self = this;
            _self.note = _self.editNote;
            _self.color = 'ls-background-' + color;
            updateStatus(_self);
            return this;
        };

        Task.prototype.unsetNote = function() {
            var _self = this;
            _self.editNote = _self.note;
            updateStatus(_self);
            return this;
        };

        function updateStatus(task) {
            task.status = 'entered on ' +
                lsDateService.formattedDate(task.entered) +
                ' by ' +
                task.enteredBy;
            if (task.completedDate) {
                task.status += ', completed on ' +
                    lsDateService.formattedDate(task.completedDate) +
                    ' by ' +
                    task.completedBy;
            }
        }

        return _service;
    }
})(angular);
