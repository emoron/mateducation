/* Javascript encargado del accordion*/ 
$(document).ready(function($){
                    $('#accordion').dcAccordion({
        showCount: true,
        saveState: true,
    });
                    $('#accordion-1').dcAccordion({
                        eventType: 'click',
                        autoClose: true,
                        saveState: true,
                        disableLink: true,
                        speed: 'slow'
                    });
                    $('#accordion-2').dcAccordion({
                        eventType: 'click',
                        autoClose: false,
                        saveState: true,
                        disableLink: true,
                        speed: 'fast'
                    });
                    $('#accordion-3').dcAccordion({
                        eventType: 'click',
                        autoClose: false,
                        saveState: false,
                        disableLink: false,
                        showCount: false,
                        speed: 'slow'
                    });
                    $('#accordion-4').dcAccordion({
                        eventType: 'hover',
                        autoClose: true,
                        saveState: true,
                        disableLink: true,
                        menuClose: false,
                        speed: 'slow'
                    });
                    $('#accordion-5').dcAccordion({
                        eventType: 'hover',
                        autoClose: false,
                        saveState: true,
                        disableLink: true,
                        menuClose: true,
                        speed: 'fast'
                    });
                    $('#accordion-6').dcAccordion({
                        eventType: 'hover',
                        autoClose: false,
                        saveState: false,
                        disableLink: false,
                        showCount: false,
                        menuClose: true,
                        speed: 'slow'
                    });
});
