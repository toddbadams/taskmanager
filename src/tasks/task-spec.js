(function(angular, moment) {
    'use strict';
    var _moduleId = 'ls',
        _lsAppointmentTaskModel,
        _lsAppointmentTask,
        $compile,
        $rootScope,

        // setup funciton run before each test
        _setup = function() {
            angular.mock.module(_moduleId);
            // inject the lsDateService service
            angular.mock.inject(function(_lsAppointmentTaskModel_, _lsAppointmentTask_,
                _$compile_, _$rootScope_) {
                _lsAppointmentTaskModel = _lsAppointmentTaskModel_;
                _lsAppointmentTask = _lsAppointmentTask_;
                $compile = _$compile_;
                $rootScope = _$rootScope_;
            });
        },
        // tear down after each test
        _teardown = function() {

        };

    describe('Appointment Tasks', function() {

        //Setup
        beforeEach(_setup);

        describe('expecting when a task is not complete', function() {
            // create a task
            var _entered = 1944000, // jan 23 1970 12:00:00
                _enteredBy = 'Harry Dude',
                // create a task
                _task = _lsAppointmentTaskModel.create(_entered, _enteredBy),
                // Compile HTML containing the appointment task directive
                _element = $compile("<ls-appointment-task></a-great-eye>")($rootScope);

            // mark incomplete
            _task.markIncomplete();
            it('shows an unchecked box', function() {

            });
            it('shows status message "entered {enter date} by {entered user}"', function() {

            });
        });
        describe('expecting when a task is complete', function() {
            it('shows a checked box', function() {

            });
            it('show status message "entered {enter date} by {entered user}, completed on {complete date } by {complete date}"', function() {

            });
        });
        describe('expecting when on clicking complete/incomplete box', function() {
            it('shows spinner while updating', function() {

            });
            it('when done updating shows incomplete when starting with complete', function() {

            });
            it('when done updating shows complete when starting with incomplete', function() {

            });
        });
        describe('expecting when not complete', function() {

        });
        describe('expecting when clicking on the "task menu" button', function() {
            it('provide a slide out menu for actions on the individual task: edit, delete, add new tasks', function() {

            });
            describe('expecting when clicking the task "edit" button', function() {

                it('changes task note from displayed text to editable text', function() {

                });
            });
            describe('expecting when clicking the task "delete" button', function() {
                it('displays a confirm delete dialog box', function() {

                });
                describe('expecting when clicking the confirm delete button on the task delete dialog box', function() {
                    it('deletes the task', function() {

                    });
                });
            });
            describe('expecting when clicking the task "add" button', function() {

                it('adds a tasks to the top of the list in edit mode, adds the entered date and entered by ', function() {

                });

                describe('expecting lsAppointmentTaskModel.create', function() {
                    it('should have an unix entered date', function() {
                        var _expected = 1944000, // jan 23 1970 12:00:00
                            _result = _lsAppointmentTaskModel.create(_expected, null);
                        expect(_result.entered).toBe(_expected);
                    });
                    it('should have an entered by', function() {
                        var _expected = 'some full name', // jan 23 1970 12:00:00
                            _result = _lsAppointmentTaskModel.create(null, _expected);
                        expect(_result.enteredBy).toBe(_expected);
                    });
                });
            });
        });


        //Teardown
        afterEach(_teardown);
    });


})(angular, moment);
