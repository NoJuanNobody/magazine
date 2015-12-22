//Defaults for Validation Script
jQuery.validator.setDefaults({

    errorClass: "has-error",
    success: "has-success",
    errorElement: ".control-label",
    errorElement: "span",
    errorClass: "help-block",

    highlight: function(element) {
        $(element).closest('.form-group').removeClass(
            'has-success has-feedback').addClass(
            'has-error has-feedback');
        $(element).closest('.form-group').find('span.glyphicon').remove();
        $(element).closest('.form-group').find('span.sr-only').remove();
        $(element).closest('.form-group').append(
            '<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true" aria-describedby="inputErrorStatus"></span><span id="inputErrorStatus" class="sr-only">(error)</span>'
        );
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').addClass('has-success').removeClass(
            'has-error');
        $(element).closest('.form-group').find('span.glyphicon').remove();
        $(element).closest('.form-group').find('span.sr-only').remove();
        $(element).closest('.form-group').append(
            '<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true" aria-describedby="inputSuccessStatus"></span><span id="inputSuccessStatus" class="sr-only">(success)</span>'
        );
    },
    errorPlacement: function(error, element) {
        if (element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        }
        else {
            error.insertAfter(element);
        }
    }

});

// Form 42 Tour Request
$('#form42').validate({
    rules: {
        first: {
            required: true
        },
        last: {
            required: true
        },
        emailAddress: {
            required: true,
            email: true
        },
        homePhone: {
            required: true
        },
        address1: {
            required: true
        },
        city: {
            required: true
        },
        stateOrProvince: {
            required: true
        },
        zipOrPostalCode: {
            required: true
        },
        inquiringFor1: {
            required: true
        }

    }
});

// Form 40 CC Tour Request
$('#form40').validate({
    rules: {
        first: {
            required: true
        },
        last: {
            required: true
        },
        emailAddress: {
            required: true,
            email: true
        },
        homePhone: {
            required: true
        },
        address1: {
            required: true
        },
        city: {
            required: true
        },
        stateOrProvince: {
            required: true
        },
        zipOrPostalCode: {
            required: true
        },
        inquiringFor1: {
            required: true
        }

    }
});

// Form 41 Brochure Request
$('#form41').validate({
    rules: {
        first: {
            required: true
        },
        last: {
            required: true
        },
        emailAddress: {
            required: true,
            email: true
        },
        homePhone: {
            required: true
        },
        address1: {
            required: true
        },
        city: {
            required: true
        },
        stateOrProvince: {
            required: true
        },
        zipOrPostalCode: {
            required: true
        },
        inquiringFor1: {
            required: true
        }

    }
});

// Form 36 CC Brochure Request
$('#form36').validate({
    rules: {
        first: {
            required: true
        },
        last: {
            required: true
        },
        emailAddress: {
            required: true,
            email: true
        },
        homePhone: {
            required: true
        },
        address1: {
            required: true
        },
        city: {
            required: true
        },
        stateOrProvince: {
            required: true
        },
        zipOrPostalCode: {
            required: true
        },
        inquiringFor1: {
            required: true
        }

    }
});

// *********Short Forms***************

// Form 35 Short Form Brochure Request
$('#form35').validate({
    rules: {
        first: {
            required: true
        },
        last: {
            required: true
        },
        emailAddress: {
            required: true,
            email: true
        }
    }
});

// Form 49 Short Form Memory Care Brochure
$('#form49').validate({
    rules: {
        first: {
            required: true
        },
        last: {
            required: true
        },
        emailAddress: {
            required: true,
            email: true
        }
    }
});