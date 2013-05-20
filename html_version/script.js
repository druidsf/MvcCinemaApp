$(document).ready(function(){
	$('#tabs div').hide();
	$('#tabs div:first').show();
	$('#tabs ul li:first').addClass('active');
	 
	$('#tabs ul li a').click(function(){
	$('#tabs ul li').removeClass('active');
	$(this).parent().addClass('active');
	var currentTab = $(this).attr('href');
	$('#tabs div').hide();
	$(currentTab).show();
	return false;
	});



// TABLE SCRIPT

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function getElementsByClassName(className, tag, elm){
	var testClass = new RegExp("(^|\\s)" + className + "(\\s|$)");
	var tag = tag || "*";
	var elm = elm || document;
	var elements = (tag == "*" && elm.all)? elm.all : elm.getElementsByTagName(tag);
	var returnElements = [];
	var current;
	var length = elements.length;
	for(var i=0; i<length; i++){
		current = elements[i];
		if(testClass.test(current.className)){
			returnElements.push(current);
		}
	}
	return returnElements;
}

function addClassName(elm, className){
    var currentClass = elm.className;
    if(!new RegExp(("(^|\\s)" + className + "(\\s|$)"), "i").test(currentClass)){
        elm.className = currentClass + ((currentClass.length > 0)? " " : "") + className;
    }
    return elm.className;
}

function removeClassName(elm, className){
    var classToRemove = new RegExp(("(^|\\s)" + className + "(\\s|$)"), "i");
    elm.className = elm.className.replace(classToRemove, "").replace(/^\s+|\s+$/g, "");
    return elm.className;
}

function makeTheTableHeadsHighlight() {
	// get all the td's in the heart of the table...
	var table = document.getElementById('schedule_grid');
	var tbody = table.getElementsByTagName('tbody');
	var tbodytds = table.getElementsByTagName('td');
	
	// and loop through them...
	for (var i=0; i<tbodytds.length; i++) {
	
	// take note of their default class name
		tbodytds[i].oldClassName = tbodytds[i].className;
		
	// when someone moves their mouse over one of those cells...
		tbodytds[i].onmouseover = function() {
	
	// attach 'on' to the pointed cell
			addClassName(this,'on');
			
	// attach 'on' to the th in the thead with the same class name
			var topheading = getElementsByClassName(this.oldClassName,'th',table);
			addClassName(topheading[0],'on');
			
	// attach 'on' to the far left th in the same row as this cell
			var row = this.parentNode;
			var rowheading = row.getElementsByTagName('th')[0];
			addClassName(rowheading,'on');
		}
	
	// ok, now when someone moves their mouse away, undo everything we just did.
	
		tbodytds[i].onmouseout = function() {
	
	// remove 'on' from this cell
			removeClassName(this,'on');
			
	// remove 'on' from the th in the thead
			var topheading = getElementsByClassName(this.oldClassName,'th',table);
			removeClassName(topheading[0],'on');

	// remove 'on' to the far left th in the same row as this cell
			var row = this.parentNode;
			var rowheading = row.getElementsByTagName('th')[0];
			removeClassName(rowheading,'on');
		}
	}
}
addLoadEvent(makeTheTableHeadsHighlight);


// BOOKING SCRIPT

$(function () {
            var settings = {
                rows: 5,
                cols: 15,
                rowCssPrefix: 'row-',
                colCssPrefix: 'col-',
                seatWidth: 35,
                seatHeight: 35,
                seatCss: 'seat',
                selectedSeatCss: 'selectedSeat',
				selectingSeatCss: 'selectingSeat'
            };

            var init = function (reservedSeat) {
                var str = [], seatNo, className;
                for (i = 0; i < settings.rows; i++) {
                    for (j = 0; j < settings.cols; j++) {
                        seatNo = (i + j * settings.rows + 1);
                        className = settings.seatCss + ' ' + settings.rowCssPrefix + i.toString() + ' ' + settings.colCssPrefix + j.toString();
                        if ($.isArray(reservedSeat) && $.inArray(seatNo, reservedSeat) != -1) {
                            className += ' ' + settings.selectedSeatCss;
                        }
                        str.push('<li class="' + className + '"' +
                                  'style="top:' + (i * settings.seatHeight).toString() + 'px;left:' + (j * settings.seatWidth).toString() + 'px">' +
                                  '<a title="' + seatNo + '">' + seatNo + '</a>' +
                                  '</li>');
                    }
                }
                $('#place').html(str.join(''));
            };

            //case I: Show from starting
            //init();

            //Case II: If already booked
            var bookedSeats = [5, 10, 25];
            init(bookedSeats);


            $('.' + settings.seatCss).click(function () {
			if ($(this).hasClass(settings.selectedSeatCss)){
				alert('This seat is already reserved');
			}
			else{
                $(this).toggleClass(settings.selectingSeatCss);
				}
            });

            $('#btnShow').click(function () {
                var str = [];
                $.each($('#place li.' + settings.selectedSeatCss + ' a, #place li.'+ settings.selectingSeatCss + ' a'), function (index, value) {
                    str.push($(this).attr('title'));
                });
                alert(str.join(','));
            })

            $('#btnShowNew').click(function () {
                var str = [], item;
                $.each($('#place li.' + settings.selectingSeatCss + ' a'), function (index, value) {
                    item = $(this).attr('title');                   
                    str.push(item);                   
                });
                alert(str.join(','));
            })
        });


});
