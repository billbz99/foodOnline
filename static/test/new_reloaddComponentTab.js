function reloadComponentTab() {
    $.ajax({
        type: "GET",
        url: "{% url 'ajax_report_components' report.id %}",
        success: function(response) {
            $('#collapseFive .panel-body').html(response);

            // Reinitialize sortable panels if needed
            // Ensure that the draggable panel list is properly initialized with sortable()
            $('#draggablePanelList').sortable({
                handle: '.panel-heading',
                update: function() {
                    var order = $(this).sortable('toArray');
                    // Assuming you have some means to save this order back to the server
                    // This might need to be implemented depending on your application's requirements
                }
            });

            // Bootstrap 5 requires reinitialization of components when dynamically loaded
            // Reinitialize tabs and ensure that newly loaded tab triggers are working properly
            $('.nav-tabs a').tab(); // Bootstrap 5 may use different methods or none if automatic handling is sufficient

            // Reinitialize tooltips if they are used in the newly loaded content
            $('[data-bs-toggle="tooltip"]').tooltip();

            // If there are any other Bootstrap components like modals, popovers, or dropdowns loaded dynamically, reinitialize them too
            $('[data-bs-toggle="modal"]').modal();
            $('[data-bs-toggle="popover"]').popover();
            $('.dropdown-toggle').dropdown();

            // Add event handlers if needed, for instance, for new buttons or links
            // For example, if you have new delete buttons, reattach event handlers
            $('#new-component-btn').on('click', function() {
                // handle new component addition
            });

            // Since IDs should be unique, ensure no conflicts in dynamically loaded content
            // If the 'New Component' button is supposed to show a modal, make sure it triggers correctly
            $('#new-component-btn').on('click', function() {
                var href = $(this).data('href'); // Ensure the href is correctly set up to target the modal
                $(href).modal('show');
            });

            // Debugging log to check if elements are correctly loaded and event handlers are bound
            console.log("Component tab reloaded and components reinitialized.");
        },
        error: function() {
            console.error("Failed to load components.");
        }
    });
}
