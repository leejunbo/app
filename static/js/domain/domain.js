$('#jobs').removeClass('display').addClass('table table-striped table-bordered table-hover');
$(document).ready(function () {
    var table = $('#jobs').DataTable({
        "ajax": "/domain/d_sql_data",
        "columns": [
            {data: "id"},
            {data: "domain"},
            {data: "ip"},
            {data: "cls_id"},
            {data: null}
        ],
        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<button id=\"editInfo\" class=\"btn-edit btn-primary-edit btn-sm-handle \">修改</button >" +
            "<button id=\"deleteInfo\" class=\"btn-del btn-primary-del btn-sm-handle\">删除</button> "
        }],
        "lengthMenu": [[50, 100, -1], [50, 100, "All"]]
    });
    table.on('order.dt search.dt',
    function(){
        table.column(0,{
             search: 'applied',
             order: 'applied'
    }).nodes().each(function(cell,i){
        cell.innerHTML = i + 1;
    });
    }).draw();
    $('#jobs tbody').on('click', '#editInfo', function () {
        console.log("sdfasdfsdf");
        var data = table.row($(this).parents().parents('tr')).data();
        $('#id').val(data.id);
        $('#domain').val(data.domain);
        $('#ip').val(data.ip);
        $('#update').modal('show');
    });
    $('#jobs tbody').on('click', '#deleteInfo', function () {
        var data = table.row($(this).parents().parents('tr')).data();
        $('#del_id').val(data.id);
        $('#cls_id').val(data.cls_id);
        $('#delete').modal('show');
    });
});
