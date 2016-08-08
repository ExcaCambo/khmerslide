$(document).ready(function () {
    $("#input-5").fileinput({showCaption: !1}), $("#input-6").fileinput({
        showUpload: !1,
        maxFileCount: 10,
        mainClass: "input-group-lg"
    }), $("#input-8").fileinput({
        initialPreview: ["<img src='../build/images/backgrounds/moon.jpg' class='file-preview-image' alt='The Moon' title='The Moon'>", "<img src='../build/images/backgrounds/earth.jpg' class='file-preview-image' alt='The Earth' title='The Earth'>"],
        overwriteInitial: !1,
        maxFileSize: 100,
        initialCaption: "The Moon and the Earth"
    }), $("#input-9").fileinput({
        initialPreview: ["<img src='../build/images/backgrounds/moon.jpg' class='file-preview-image' alt='The Moon' title='The Moon'>", "<img src='../build/images/backgrounds/earth.jpg' class='file-preview-image' alt='The Earth' title='The Earth'>"],
        overwriteInitial: !0,
        initialCaption: "The Moon and the Earth"
    }), $("#input-10").fileinput({
        previewFileType: "image",
        browseClass: "btn btn-success",
        browseLabel: "Pick Image",
        browseIcon: "<i class='ti-image'></i>&nbsp;",
        removeClass: "btn btn-danger",
        removeLabel: "Delete",
        removeIcon: "<i class='ti-trash'></i>&nbsp;",
        uploadClass: "btn btn-info",
        uploadLabel: "Upload",
        uploadIcon: "<i class='ti-upload'></i>&nbsp;"
    }), $("#input-11").fileinput({
        previewFileType: "text",
        allowedFileExtensions: ["txt", "md", "ini", "text"],
        previewClass: "bg-warning"
    }), $("#input-12").fileinput({
        showUpload: !1,
        layoutTemplates: {main1: "{preview}\n<div class='input-group {class}'>\n   <div class='input-group-btn'>\n       {browse}\n       {upload}\n       {remove}\n   </div>\n   {caption}\n</div>"}
    }), $(".btn-modify").on("click", function () {
        var i = $(this);
        $("#input-13");
        "Modify" == i.text() ? ($("#input-13").fileinput("disable").fileinput("refresh", {showUpload: !1}), i.html("Revert"), alert("Hurray! I have disabled the input and hidden the upload button.")) : ($("#input-13").fileinput("enable").fileinput("refresh", {showUpload: !0}), i.html("Modify"), alert("Hurray! I have reverted back the input to enabled with the upload button."))
    }), $("#input-14").fileinput({
        maxFileCount: 10,
        uploadAsync: true,
        previewFileIcon: '<i class="fa fa-file"></i>',
        allowedPreviewTypes: null,
        previewFileIconSettings: {
            'pptx': '<i class="fa fa-file-powerpoint-o text-danger"></i>',
            'ppt': '<i class="fa fa-file-powerpoint-o text-danger"></i>',
            'pptx': '<i class="fa fa-file-pdf-o text-danger"></i>',
        },
        allowedFileExtensions: ["pptx", "pdf", "ppt"]
    }), $("#input-15").fileinput({
        maxFileCount: 10,
        allowedFileExtensions: ["jpg", "gif", "png", "txt"]
    }), $("#input-16").fileinput({
        showPreview: !1,
        allowedFileExtensions: ["zip", "rar", "gz", "tgz"],
        elErrorContainer: "#errorBlock"
    })
});