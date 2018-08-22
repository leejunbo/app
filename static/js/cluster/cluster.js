var c_col = [
    {data: "cls_id"},
    {data: "cls_name"},
    {data: "cls_path"},
    {data: "cls_ip"},
    {data: null}
];
$('#jobs').removeClass('display').addClass('table table-striped table-bordered table-hover');
$(document).ready(function () {
    var table = $('#jobs').DataTable({
        "ajax": "/cluster/c_sql_data",
        "columns": c_col,
        "scrollX": true,
        "lengthMenu": [[50, 100, -1], [50, 100, "All"]],
        "columnDefs": [
            {
                "targets": -1,
                "defaultContent": "<font style=\"float:left;padding-left: 2px;\"><button id=\"c_editInfo\" class=\"btn-edit btn-primary-edit btn-sm-handle\">修改</button ></font>"
                + "<font style=\"float:left;padding-left: 2px;\"><button id=\"c_deleteInfo\" class=\"btn-del btn-primary-del btn-sm-handle\">删除</button></font>"
            },

        ]
    });
    $('#jobs tbody').on('click', '#c_editInfo', function () {
        var data = table.row($(this).parents().parents('tr')).data();
        console.log(data);
        $('#e_cls_id').val(data.cls_id);
        $('#e_cls_name').val(data.cls_name);
        $('#e_cls_path').val(data.cls_path);
        $('#e_cls_ip').val(data.cls_ip);
        $('#c_edit').modal('show');
    });


    $('#jobs tbody').on('click', '#c_deleteInfo', function () {
        var data = table.row($(this).parents().parents('tr')).data();
        console.log(data);
        $('#d_cls_id').val(data.cls_id);
        $('#d_cls_name').val(data.cls_name);
        $('#d_cls_path').val(data.cls_path);
        $('#d_cls_ip').val(data.cls_ip);
        $('#c_delete').modal('show');
    });


    $('#jobs tbody').on('click', '#moreInfo', function () {
        var data = table.row($(this).parents().parents('tr')).data();
        $('#domain').val(data.domain);
        $.ajax({
            type: 'post',
            url: '/domain/config_file_info',
            data: JSON.stringify(data),
            contentType: 'application/json; charset=UTF-8',
            dataType: 'json',
            success: function (f) {
                $('#confFile').val(f);
                $('#editConfInfo').modal('show')
            }
        })
    });

    $("#c_add_button").on('click', '#c_add_Info', function () {
    $('#c_add').modal('show');
    });

});
