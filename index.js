

function edit_info() {


  $("#pers tr:eq(1) td:eq(1)").text($("#i_name").val());
  $("#pers tr:eq(2) td:eq(1)").text($("#i_country").val());
  $("#pers tr:eq(3) td:eq(1)").text($("#i_email").val());
  $("#pers tr:eq(4) td:eq(1)").text($("#i_deg").val());
  $("#pers tr:eq(5) td:eq(1)").text($("#i_pos").val());
  $("#pers tr:eq(6) td:eq(1)").text($("#i_pro").val());

}

$('#modal_info').on('show.bs.modal', function (e) {

    $("#i_name").val($("#pers tr:nth-child(2) td:nth-child(2)").text());

    $("#i_country").val($("#pers tr:nth-child(3) td:nth-child(2)").text());

    $("#i_email").val($("#pers tr:nth-child(4) td:nth-child(2)").text());

    $("#i_deg").val($("#pers tr:nth-child(5) td:nth-child(2)").text());

    $("#i_pos").val($("#pers tr:nth-child(6) td:nth-child(2)").text());

    $("#i_pro").val($("#pers tr:nth-child(7) td:nth-child(2)").text());
});

$('#modal_info').on('hidden.bs.modal', function (e) {
  $("#i_name").val("");

});




$("#it1 tr").each(function(i) {
      if(i>=1){

          $(this).find("td:eq(0)")
          .append('&nbsp; &nbsp; <a href="#" data-toggle="modal" data-target="#modal_tech"><i class="fa fa-edit text-primary"></i></a>');

      }
});

$("#it2 tr").each(function(i) {
      if(i>=1){

          $(this).find("td:eq(0)")
          .append('&nbsp; &nbsp; <a href="#" data-toggle="modal" data-target="#modal_tech"><i class="fa fa-edit text-primary"></i></a>');

      }
});

$("#db tr").each(function(i) {
      if(i>=1){

          $(this).find("td:eq(0)")
          .append('&nbsp; &nbsp; <a href="#" data-toggle="modal" data-target="#modal_tech"><i class="fa fa-edit text-primary"></i></a>');

      }
});

$("#sof tr").each(function(i) {
      if(i>=1){

          $(this).find("td:eq(0)")
          .append('&nbsp; &nbsp; <a href="#" data-toggle="modal" data-target="#modal_tech"><i class="fa fa-edit text-primary"></i></a>');

      }
});

$("#op tr").each(function(i) {
      if(i>=1){

          $(this).find("td:eq(0)")
          .append('&nbsp; &nbsp; <a href="#" data-toggle="modal" data-target="#modal_tech"><i class="fa fa-edit text-primary"></i></a>');

      }
});


$("#metho tr").each(function(i) {
      if(i>=1){

          $(this).find("td:eq(0)")
          .append('&nbsp; &nbsp; <a href="#" data-toggle="modal" data-target="#modal_tech"><i class="fa fa-edit text-primary"></i></a>');

      }
});


var ii,t,l;

$('table tr td').find('i').click( function(){
  console.log("row index: "+$(this).parent().parent().parent().index());
  console.log("Table id: "+$(this).parent().parent().parent().parent().parent().attr("id"));
  console.log("Edit - "+$(this).parent().parent().text());

  ii= $(this).parent().parent().parent().index();
  t= $(this).parent().parent().parent().parent().parent().attr("id");
  l= "- "+$(this).parent().parent().text();

  $("#lbl").text(l);

  //$('.id_100 option[value=val2]').attr('selected','selected');

  //$('select#sel_level option[value="'++'"]');



});






function edit_tech() {

    var lv="Level: <span class='lv'>"+$("#sel_level").val()+"</span>";

    var y=" |     Years: <span class='years'>"+$("#i_years").val()+"</span>";

    $("#"+t+" tr:eq("+ii+") td:eq(1)").text("");

    $("#"+t+" tr:eq("+ii+") td:eq(1)").append(lv+y);


    var foo=[];

    $('#sel_context :selected').each(function(i, selected){

            foo[i] = $(selected).text();
    });


    var rs="";
    if(foo.length>1)
    {

      $.each(foo,function(k,v) {


          rs=rs +" "+ v;

      });

      $("#"+t+" tr:eq("+ii+") td:eq(2)").append("<span class='ctx'>"+foo.join( ", " )+"</span>");

      console.log("sol1");
    }
    else {
        rs=  $('#sel_context :selected').text();
        $("#"+t+" tr:eq("+ii+") td:eq(2)").append("<span class='ctx'>"+rs+"</span>");

        console.log("sol2");
    }


// clear the data of the modal
$("#sel_level option:selected").removeAttr("selected"); // clear simple select
$("#sel_context > option").prop("selected",false); // clear  multi select
$("#i_years").val("");// clear input number to years




}


//

function genPDF() {

    var doc = new jsPDF('p', 'pt');

    // Optional - set properties on the document
    doc.setProperties({
        title: 'DC Profile: '+$("#pers tr:nth-child(2) td:nth-child(2)").text(),
        subject: 'My IT Profile',
        author: 'AMPM',
        keywords: 'report, js,html',
        creator: 'ampm'
    });

    var totalPagesExp = "{total_pages_count_string}";
    var header = function() {
        // doc.addImage(eqs, 'JPEG', 40, 20, 80, 25);

        //x   y   w    h
        // doc.addImage(ipac, 'JPEG', 490, 15, 40, 30);

        doc.text("DC Profile", 180, 30);


        doc.setFontSize(9);
        doc.setTextColor(255, 165, 0);

        doc.text($("#pers tr:nth-child(2) td:nth-child(2)").text(), 180, 45);
    }

    var np = 1;
    var footer = function(d) {

        var ddd= new Date();
        //var str = "Page " + d.pageCount;
        var str = "Page " + np;
        var str2 = ddd.toLocaleDateString();
        // Total page number plugin only available in jspdf v1.0+
        if (typeof doc.putTotalPages === 'function') {
            str = str + " of " + totalPagesExp;
        }

        doc.text(str2, d.settings.margin.left, doc.internal.pageSize.height - 30);

        doc.text(str, d.settings.margin.left + 480, doc.internal.pageSize.height - 30);


        np++
    }


    // ---------------------- size of cells  Standard



    style = {
        0: {
            columnWidth: 150,
            fontStyle: 'bold'
        },
        1: {
            columnWidth: 350
        }

    };

    style2 = {
        0: {
            columnWidth: 150
        },
        1: {
            columnWidth: 150
        },
        2: {
            columnWidth: 200
        }

    };



    //-------------------- Info table-----------------------------------
    var info = doc.autoTableHtmlToJson(document.querySelector("#pers"));
    //console.log("info:");
    //console.log(info);
    var info_c = info.columns;
    var info_d = info.data;
    doc.autoTable(info_c, info_d, {
        startY: 60,
        theme: 'grid',
        font: 'arial',
        styles: {
            overflow: 'linebreak',
            fontSize: 10,
        },
        columnStyles: style,
        drawHeaderRow: function() {
            // Don't draw header row
            return false;
        },
        drawRow: function(row, data) {
            // Colspan
            doc.setFontStyle('bold');
            doc.setFontSize(10);
            if (row.index === 0) {
                doc.setTextColor(255, 255, 255);
                doc.setFillColor(30, 144, 255);
                doc.rect(data.settings.margin.left, row.y, data.table.width - 15, 20, 'F');
                doc.setFillColor(255, 50, 20);
                doc.autoTableText("Personal Information", data.settings.margin.left + 10, row.y + 10, {
                    valign: 'middle'
                });
                data.cursor.y += 20;
            }
        },
        beforePageContent: header

    });


    //------------------------------Tech-----------------------------
    var q1 = doc.autoTableHtmlToJson(document.querySelector("#it1"));
    //console.log("q1:");
    //console.log(q1);
    var q1c = q1.columns;
    var q1d = q1.data;
    doc.autoTable(q1c, q1d, {
        startY: doc.autoTableEndPosY() + 10,
        theme: 'grid',
        font: 'arial',
        headerStyles: {
            halign: 'center', // left, center, right
            valign: 'middle', // top, middle, bottom
            fillColor: 0
        },
        styles: {
            overflow: 'linebreak',
            fontSize: 9
        },
        columnStyles: style2,

        //  afterPageContent:footer
    });



    //  tabole of frameworks

    var q2 = doc.autoTableHtmlToJson(document.querySelector("#it2"));
    //console.log("q2:");
    //console.log(q2);
    var q2c = q2.columns;
    var q2d = q2.data;
    doc.autoTable(q2c, q2d, {
        startY: doc.autoTableEndPosY() + 10,
        theme: 'grid',
        font: 'arial',
        margin: {
            top: 60
        },
        headerStyles: {
            halign: 'center', // left, center, right
            valign: 'middle', // top, middle, bottom
            fillColor: 0
        },
        styles: {
            overflow: 'linebreak',
            fontSize: 9
        },
        columnStyles: style2,

        afterPageContent: footer,
        beforePageContent: header
    });

    var q3 = doc.autoTableHtmlToJson(document.querySelector("#db"));
    //console.log("q3:");
    //console.log(q3);
    var q3c = q3.columns;
    var q3d = q3.data;
    doc.autoTable(q3c, q3d, {
        startY: doc.autoTableEndPosY() + 10,
        theme: 'grid',
        font: 'arial',
        headerStyles: {
            halign: 'center', // left, center, right
            valign: 'middle', // top, middle, bottom
            fillColor: 0
        },
        styles: {
            overflow: 'linebreak',
            fontSize: 9
        },
        columnStyles: style2,


    });

    // software
    var q4 = doc.autoTableHtmlToJson(document.querySelector("#sof"));
    //console.log("q4:");
    //console.log(q4);
    var q4c = q4.columns;
    var q4d = q4.data;
    doc.autoTable(q4c, q4d, {
        startY: doc.autoTableEndPosY() + 10,
        theme: 'grid',
        font: 'arial',
        headerStyles: {
            halign: 'center', // left, center, right
            valign: 'middle', // top, middle, bottom
            fillColor: 0
        },
        styles: {
            overflow: 'linebreak',
            fontSize: 9
        },
        columnStyles: style2,


    });



    // OS
    var q5 = doc.autoTableHtmlToJson(document.querySelector("#op"));
    //console.log("OS:");
    //console.log(q5);
    var q5c = q5.columns;
    var q5d = q5.data;
    doc.autoTable(q5c, q5d, {
        startY: doc.autoTableEndPosY() + 10,
        theme: 'grid',
        font: 'arial',
        headerStyles: {
            halign: 'center', // left, center, right
            valign: 'middle', // top, middle, bottom
            fillColor: 0
        },
        styles: {
            overflow: 'linebreak',
            fontSize: 9
        },
        columnStyles: style2

    });




    //meth
    var q6 = doc.autoTableHtmlToJson(document.querySelector("#met"));
    //console.log("metho:");
    //console.log(q6);
    var q6c = q6.columns;
    var q6d = q6.data;
    doc.autoTable(q6c, q6d, {
        startY: doc.autoTableEndPosY() + 100,
        theme: 'grid',
        font: 'arial',
        margin: {
            top: 60
        },
        headerStyles: {
            halign: 'center', // left, center, right
            valign: 'middle', // top, middle, bottom
            fillColor: 0
        },
        styles: {
            overflow: 'linebreak',
            fontSize: 9
        },
        columnStyles: style2,
        beforePageContent: header,
        afterPageContent: footer


    });


    if (typeof doc.putTotalPages === 'function') {
        doc.putTotalPages(totalPagesExp);
    }


    //var o = doc.output('datauristring');

    // window.open(o, '_blank');

    
     $("#info tr").remove();
     $("#info2 tr").remove();
    $("#info3 tr").remove();


    doc.save('your-profile.pdf');

}
