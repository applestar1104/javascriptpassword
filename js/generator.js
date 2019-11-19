			//<![CDATA[
			(function($) {
			    $.generateRandomPassword = function(length, AlphaLower, AlphaUpper, Num, Special, Ambiguous, Memorable, WordList) {
			        length = typeof length !== 'undefined' ? length : 12;
			        AlphaLower = typeof AlphaLower !== 'undefined' ? AlphaLower : true;
			        AlphaUpper = typeof AlphaUpper !== 'undefined' ? AlphaUpper : true;
			        Num = typeof Num !== 'undefined' ? Num : true;
			        Special = typeof Special !== 'undefined' ? Special : false;
			        Ambiguous = typeof Ambiguous !== 'undefined' ? Ambiguous : false;
					Memorable = typeof Memorable !== 'undefined' ? Memorable : false;
					word_number_first = typeof word_number_first !== null ? word_number_first : false;
					//length = typeof length !== 'undefined' ? Memorable : false;
					

					var alphaLowerChars = 'abcdefghjkmnpqrstuvwxyz',
						alphaUpperChars = 'ABCDEFGHJKLMNPQRSTUVWXYZ',
						numChars = '23456789',
						specialChars = '~!@#$%^&*()=+[]{};:,.<>/?_-';
						separatorChars = '-+=.*|,~^';
						paddingChars = '!@#$%^&:?';
						
					var words = WordList.slice();					
			        var password = '';
					
					if(Memorable == true) {

						var random_number = Math.round(Math.random() * 7) ;
						var word_length = random_number==0?1:random_number;
						loadWords(word_length);	
						//console.log(wordList);
						//console.log(word_length);
						var words_counts = 0,
							numpadding_count = 0,
							padding_count = 0,
							pos = 0;							
						var padding_char = '',
							separator_char = '',
							numpadding_chars = '',
							random_word = '';
						
						padding_count = word_length;						
						numpadding_count = padding_count - (word_length - 1);												
						separator_char_list = "~!@#$%^&*()_+=}{][|:;'><?.,";
						pattern_type = separator_char_list.charAt(Math.floor(Math.random() * separator_char_list.length));
						padding_symbol_be = separator_char_list.charAt(Math.floor(Math.random() * separator_char_list.length));
						var short_words3 = "ant,ago,any,art,bag,bet,boy,buy,cut,cow,day,eye,fun,hen,hat,ice,leg,nod,oil,pig,aid,bin,bot,bye,cat,dar,gig,tea,tie,win,try,spy,pot,pie,out,odd,nut,nap,nee,kit,jet,egg,gas,fog,fax,dos,bid,app,but,cot";
						var short_words2 = "qi,za,xu,ex,ox,xi,mm,by,hm,my,up,be,ef,em,fa,fe,if,ma,me,of,pi,uh,we,go,he,hi,oh,ya,ye,ad,de,en,id,no,on,us,at,io,is,it,or,os";
						



						if(length==8||length==9||length==10||length==11||length==12||length==13){
							
							//words_group = short_words2.split(",");

							if(length==11||length==12||length==13){
								password += padding_symbol_be;
							}
							password += (length == 10)? Math.floor(Math.random() * 10):"";
							password += Math.floor(Math.random() * 10);	
							if(length==12||length==13){
								password += Math.floor(Math.random() * 10);
							}						
							password += pattern_type; 								
							pos = Math.floor(Math.random() * wordList.length);
							random_word = wordList[pos];
							password += random_word.toLowerCase();
							password += pattern_type;							
							pos = Math.floor(Math.random() * wordList.length);
							random_word = wordList[pos];
							password += random_word.toUpperCase();
							password += pattern_type;
							
							if(length!=8){
								password += Math.floor(Math.random() * 10);
							}
							if(length==13){
								password += Math.floor(Math.random() * 10);
							}
							if(length==11||length==12||length==13){
								password += padding_symbol_be;
							}
							console.log(password.length);
							//console.log("dsfsdfds");							
							return password;

						} else if((length-5)%3==0||(length-5)%4==0||(length-5)%5==0||(length-5)%6==0||(length-5)%7==0||(length-5)%8==0)
						{
							//console.log(word_number_second1);

							//words_group2 = short_words2.split(",");	
							password += padding_symbol_be;							
							password += Math.floor(Math.random() * 10);										
							password += pattern_type; 
							word_type = (length-5) / 3;	
							var casechecker;
							if((length-5)%3==0){
								
								for (var i = 0; i < (length-5)/3; i++) {

									pos = Math.floor(Math.random() * wordList.length);
									random_pos = (casechecker % 2 == 0)?7:6;
									random_word = wordList[pos];		
									password +=(random_pos%2==1)? random_word.toLowerCase(): random_word.toUpperCase();
									password += pattern_type;
									casechecker = random_pos;

								}
								console.log(2);

							} else if((length-5)%4==0) {

								for (var i = 0; i < (length-5)/4; i++) {
								pos = Math.floor(Math.random() * wordList3.length);
								random_pos = (casechecker % 2 == 0)?7:6;
								random_word = wordList3[pos];		
								password +=(random_pos%2==1)? random_word.toLowerCase(): random_word.toUpperCase();
								password += pattern_type;
								casechecker = random_pos;

								}
								console.log(3);

							} else if((length-5)%5==0) {

								for (var i = 0; i < (length-5)/5; i++) {
								pos = Math.floor(Math.random() * wordList4.length);
								random_pos = (casechecker % 2 == 0)?7:6;
								random_word = wordList4[pos];		
								password +=(random_pos%2==1)? random_word.toLowerCase(): random_word.toUpperCase();
								password += pattern_type;
								casechecker = random_pos;

								}
								console.log(4);

							} else if((length-5)%6==0) {

								for (var i = 0; i < (length-5)/6; i++) {
								pos = Math.floor(Math.random() * wordList5.length);
								random_pos = (casechecker % 2 == 0)?7:6;
								random_word = wordList5[pos];		
								password +=(random_pos%2==1)? random_word.toLowerCase(): random_word.toUpperCase();
								password += pattern_type;
								casechecker = random_pos;

								}
								console.log(5);

							} else if((length-5)%7==0) {

								for (var i = 0; i < (length-5)/7; i++) {
								pos = Math.floor(Math.random() * wordList6.length);
								random_pos = (casechecker % 2 == 0)?7:6;
								random_word = wordList6[pos];		
								password +=(random_pos%2==1)? random_word.toLowerCase(): random_word.toUpperCase();
								password += pattern_type;
								casechecker = random_pos;

								}
								console.log(6);

							} else if((length-5)%8 == 0) {

								for (var i = 0; i < (length-5)/8; i++) {
								pos = Math.floor(Math.random() * wordList7.length);
								random_pos = (casechecker % 2 == 0)?7:6;
								random_word = wordList7[pos];		
								password +=(random_pos%2==1)? random_word.toLowerCase(): random_word.toUpperCase();
								password += pattern_type;
								casechecker = random_pos;

								}
								console.log(7);

							}
							password += Math.floor(Math.random() * 10);
							password += padding_symbol_be;
							//console.log( ((length-4)/3));
							console.log( password.length);
							return password;	

						} else {
							var otherwords = wordList;
							var random_number = Math.floor(Math.random() * 5);
							if(random_number == 0){
								otherwords = wordList;
							} else if(random_number == 1) {
								otherwords = wordList3;
							}  else if(random_number == 2) {
								otherwords = wordList4;
							}  else if(random_number == 3) {
								otherwords = wordList5;
							}  else if(random_number == 4) {
								otherwords = wordList6;
							}  else if(random_number == 5) {
								otherwords = wordList7;
							}  
							password += padding_symbol_be;
							password += Math.floor(Math.random() * 10);
							password += pattern_type; 							
							password += numpadding_chars.substr(0, Math.floor(numpadding_count / 2));
							casechecker = null;
							for(var i = 0; i < 30; i++){
								pos = Math.floor(Math.random() * otherwords.length);								
								console.log(random_number);
								console.log(Math.floor( (length-5)/(random_number+2))-1);
								random_pos = (casechecker % 2 == 0)?7:6;
								console.log( +"pos");
								if(random_pos%2==0){
									password +=  otherwords[pos].toUpperCase();

								} else {
									password += otherwords[pos].toLowerCase();
								}
								casechecker = random_pos;								
								password += pattern_type; 
								
							}
							password += Math.floor(Math.random() * 10);
							password += padding_symbol_be;
							password = password.substr(0,length);
							console.log( "others");
							console.log( password.length);

							
							return password;
						}
						
					}
						
					if(Memorable == false) {

						var chars = '';
						if (AlphaLower) chars += alphaLowerChars;
						if (AlphaUpper) chars += alphaUpperChars;
						if (Num) chars += numChars;
						if (Special) chars += specialChars;
						if (AlphaLower && Ambiguous) chars += 'iol';
						if (AlphaLower && Ambiguous) chars += 'IO';
						if (Num && Ambiguous) chars += '01';
						if (!AlphaLower && !Num && Ambiguous) chars += 'iolIO01';
						if (chars == '') return window.lang.convert('Please make at least one selection');
						var list = chars.split('');
						var len = list.length,
							i = 0;
						
						do {
							i++;
							var index = Math.floor(Math.random() * len);
							password += list[index];
						} while (i < length);
						return password;
					}
			    };
			})(jQuery);

			function generatePass() {
			    var length_chars_select = $("#length_chars_select").val();
			    var alphalower_chars_checkbox = $("#alphalower_chars_checkbox").is(":checked");
			    var alphaupper_chars_checkbox = $("#alphaupper_chars_checkbox").is(":checked");
			    var num_chars_checkbox = $("#num_chars_checkbox").is(":checked");
			    var special_chars_checkbox = $("#special_chars_checkbox").is(":checked");
			    var special_chars_checkbox = $("#special_chars_checkbox").is(":checked");
			    var ambiguous_chars_checkbox = $("#ambiguous_chars_checkbox").is(":checked");
				var memorable_chars_checkbox = $("#memorable_chars_checkbox").is(":checked");

			    var pwd = $.generateRandomPassword(
													length_chars_select, alphalower_chars_checkbox, 
													alphaupper_chars_checkbox, num_chars_checkbox, special_chars_checkbox, 
													ambiguous_chars_checkbox, memorable_chars_checkbox,
													wordList
												);

				//console.log('password = ' + pwd);	


			    var colors = new Array();

			    var score = 0;
			    if (pwd.length > 11) {
			        score++;
			    }
			    if (pwd.match(/[a-z]/)) {
			        score++;
			    }
			    if (pwd.match(/[A-Z]/)) {
			        score++;
			    }
			    if (pwd.match(/\d+/)) {
			        score++;
			    }
			    if (pwd.match(/[^A-Za-z0-9]/)) {
			        score++;
			    };
				
			    if ((length_chars_select > 11) && (memorable_chars_checkbox == true) && (score < 5)) {
			        //generatePass1();
			    } 
				
			    if ((length_chars_select > 11) && (alphalower_chars_checkbox == true) && (alphaupper_chars_checkbox == true) && (num_chars_checkbox == true) && (special_chars_checkbox == true) && (score < 5)) {
			        generatePass1();
			    } else {

			        var desc = '';
			        if (pwd.length < 1) {
			            desc = '';
			        } else if (score < 4) {
			            desc = '<span style="color:red; font-weight:bold;"><i class="fas fa-exclamation-triangle"></i> Weak Password</span>';
			        } else if (score < 5) {
			            desc = '<span style="color:#FF8C00; font-weight:bold;"><i class="fas fa-exclamation-triangle"></i> Medium Password</span>';
			        } else if (score >= 5) {
			            desc = '<span style="color:green; font-weight:bold;"><i class="fas fa-check"></i> Strong Password</span>';
			        }

			        $('#password_strength').html(desc);
			        $('#password_show').text(pwd);
			    }
				
				
			}

			function generatePass1() {
			    var length_chars_select = $("#length_chars_select").val();
			    var alphalower_chars_checkbox = $("#alphalower_chars_checkbox").is(":checked");
			    var alphaupper_chars_checkbox = $("#alphaupper_chars_checkbox").is(":checked");
			    var num_chars_checkbox = $("#num_chars_checkbox").is(":checked");
			    var special_chars_checkbox = $("#special_chars_checkbox").is(":checked");
			    var special_chars_checkbox = $("#special_chars_checkbox").is(":checked");
			    var ambiguous_chars_checkbox = $("#ambiguous_chars_checkbox").is(":checked");
				var memorable_chars_checkbox = $("#memorable_chars_checkbox").is(":checked");

			    var pwd = $.generateRandomPassword(
													length_chars_select, alphalower_chars_checkbox, 
													alphaupper_chars_checkbox, num_chars_checkbox, special_chars_checkbox, 
													ambiguous_chars_checkbox, memorable_chars_checkbox,
													wordList, word_number_first, word_number_second
												);
			    var colors = new Array();

			    var score = 0;
			    if (pwd.length > 11) {
			        score++;
			    }
			    if (pwd.match(/[a-z]/)) {
			        score++;
			    }
			    if (pwd.match(/[A-Z]/)) {
			        score++;
			    }
			    if (pwd.match(/\d+/)) {
			        score++;
			    }
			    if (pwd.match(/[^A-Za-z0-9]/)) {
			        score++;
			    };

			    if ((length_chars_select > 11) && (memorable_chars_checkbox == true) && (score < 5)) {
			        //generatePass();
			    } 
				
			    if ((length_chars_select > 11) && (alphalower_chars_checkbox == true) && (alphaupper_chars_checkbox == true) && (num_chars_checkbox == true) && (special_chars_checkbox == true) && (score < 5)) {
			        generatePass();
			    } else {

			        var desc = '';
			        if (pwd.length < 1) {
			            desc = '';
			        } else if (score < 4) {
			            desc = '<span style="color:red; font-weight:bold;"><i class="fas fa-exclamation-triangle"></i> Weak Password</span>';
			        } else if (score < 5) {
			            desc = '<span style="color:#FF8C00; font-weight:bold;"><i class="fas fa-exclamation-triangle"></i> Medium Password</span>';
			        } else if (score >= 5) {
			            desc = '<span style="color:green; font-weight:bold;"><i class="fas fa-check"></i> Strong Password</span>';
			        }

			        $('#password_strength').html(desc);
			        $('#password_show').text(pwd);
			    }
			}


			$(document).ready(function() {
			   // generatePass();
			});

			function checkPass(memoClicked) {
				
				if(!memoClicked){
					$('#memorable_chars_checkbox').prop("checked", false);
				}
				
			    var checkboxs = $('input[type="checkbox"]');			
				
			    var okay = false;
			    for (var i = 0, l = checkboxs.length; i < l; i++) {
			        if (checkboxs[i].checked) {
			            okay = true;
			            break;
			        }
			    }
			    if (okay) {
			        generatePass();
			    } else {
			        $('#password_show').text('');
			        $('#password_strength').html('');
			        alert('Please select one option');
			    }

			}

			function copyToClipboard(el) {

			    // resolve the element
			    el = (typeof el === 'string') ? document.querySelector(el) : el;

			    // handle iOS as a special case
			    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {

			        // save current contentEditable/readOnly status
			        var editable = el.contentEditable;
			        var readOnly = el.readOnly;

			        // convert to editable with readonly to stop iOS keyboard opening
			        el.contentEditable = true;
			        el.readOnly = true;

			        // create a selectable range
			        var range = document.createRange();
			        range.selectNodeContents(el);

			        // select the range
			        var selection = window.getSelection();
			        selection.removeAllRanges();
			        selection.addRange(range);
			        el.setSelectionRange(0, 999999);

			        // restore contentEditable/readOnly to original state
			        el.contentEditable = editable;
			        el.readOnly = readOnly;
			    } else {
			        el.select();
			    }

			    // execute copy command
			    document.execCommand('copy');
			}

			function copyFunction(cvalue) {
			    var element = $('#password_show').text();
			    $("#copydataaddress").val(element);
			    $('#copydataaddress').attr('type', 'text');
			    copyToClipboard('#copydataaddress');
			    $('#copydataaddress').attr('type', 'hidden');
			    $("#myElem").hide();
			    $("#myElem1").show();
			    setTimeout(function() {
			        $("#myElem1").hide();
			        $("#myElem").show();
			    }, 2000);
			}
			
			function toggleMemorable() {
				if($("#memorable_chars_checkbox").is(":checked")){

					$('input[type="checkbox"]:not(#memorable_chars_checkbox)').prop("checked", false);
					$(".memorable").removeClass("fadeOutDown");
					$(".memorable").addClass("bounceIn");
					$(".memorable").removeClass("disappear-memorable");
					// $(".pass_slider").removeClass("appear-memorable").addClass("disappear-memorable");
				} else {
					$('input[type="checkbox"]:not(#memorable_chars_checkbox)').prop("checked", true);
					$(".memorable").removeClass("bounceIn");
					$(".memorable").addClass("fadeOutDown").delay(10000).addClass("disappear-memorable");
					// $(".pass_slider").removeClass("disappear-memorable").addClass("appear-memorable");
				}
				
				checkPass(true);
			}


			
			var wordList = null;
			var wordList3 = null;
			var wordList4 = null;
			var wordList5  = null;
			var wordList6 = null;
			var wordList7 = null;
			var word_number_first = 2;
			var word_number_second = "111111111111111";
			var word_number_second1 = "22222222222222";

			function loadWords() {
				/*
				if(Math.floor(Math.random() * 1000) % 4 != 0) {
					file_num = Math.floor(Math.random() * 1000) % 4;
				}
				*/
				var file_url2 = 'words/words_2.txt';
				var file_url3 = 'words/words_3.txt';
				var file_url4 = 'words/words_4.txt';
				var file_url5 = 'words/words_5.txt';
				var file_url6 = 'words/words_6.txt';
				var file_url7 = 'words/words_7.txt';

				$.get(file_url2, function(content){
					wordList= word_number_second1 = content.split("\r\n");					
				});	
				$.get(file_url3, function(content){
					wordList3= word_number_second1 = content.split("\r\n");					
				});
				$.get(file_url4, function(content){
					wordList4= word_number_second1 = content.split("\r\n");					
				});
				$.get(file_url5, function(content){
					wordList5= word_number_second1 = content.split("\r\n");					
				});
				$.get(file_url6, function(content){
					wordList6= word_number_second1 = content.split("\r\n");					
				});
				$.get(file_url7, function(content){
					wordList7= word_number_second1 = content.split("\r\n");					
				});	
			}

			function changeMemorableWord(){
				var file_num = $("#word_length").val();
				var file_url = 'words/words_' + file_num + '.txt';
				
				$.get(file_url, function(content){
					wordList = content.split("\r\n");
					
					//console.log(wordList);
					
					
				});	

			}

			function changeMemorable(){
				

			}
			
			$(document).ready(function() {
				
				// Loading words for memorable password
				loadWords();
				
			    $("#password_check").keyup(function() {
			        if ($.trim($(this).val()) == '') {
			            $('#strength_meter').hide();
			        } else {
			            var pwd = $(this).val();
			            $('#strength_meter').show();
			            var score = 0;
			            if (pwd.length > 11) {
			                score++;
			                $("#password_condition1").css("color", "#000");
			                $("#password_condition1 span").html('<i style="color:green;" class="fas fa-check"></i>');
			            } else {
			                $("#password_condition1").css("color", "#8a8c91");
			                $("#password_condition1 span").html('<i class="fas fa-minus"></i>');
			            }

			            if (pwd.match(/[a-z]/)) {
			                score++;
			                $("#password_condition3").css("color", "#000");
			                $("#password_condition3 span").html('<i style="color:green;" class="fas fa-check"></i>');
			            } else {
			                $("#password_condition3").css("color", "#8a8c91");
			                $("#password_condition3 span").html('<i class="fas fa-minus"></i>');
			            }

			            if (pwd.match(/[A-Z]/)) {
			                score++;
			                $("#password_condition2").css("color", "#000");
			                $("#password_condition2 span").html('<i style="color:green;" class="fas fa-check"></i>');
			            } else {
			                $("#password_condition2").css("color", "#8a8c91");
			                $("#password_condition2 span").html('<i class="fas fa-minus"></i>');
			            }

			            if (pwd.match(/\d+/)) {
			                score++;
			                $("#password_condition5").css("color", "#000");
			                $("#password_condition5 span").html('<i style="color:green;" class="fas fa-check"></i>');
			            } else {
			                $("#password_condition5").css("color", "#8a8c91");
			                $("#password_condition5 span").html('<i class="fas fa-minus"></i>');
			            }

			            if (pwd.match(/[^A-Za-z0-9]/)) {
			                score++;
			                $("#password_condition4").css("color", "#000");
			                $("#password_condition4 span").html('<i style="color:green;" class="fas fa-check"></i>');
			            } else {
			                $("#password_condition4").css("color", "#8a8c91");
			                $("#password_condition4 span").html('<i class="fas fa-minus"></i>');
			            }
			            var desc = '';
			            if (pwd.length < 1) {
			                desc = '';
			            } else if (score < 4) {
			                desc = '<span style="color:red; font-weight:bold;"><i class="fas fa-exclamation-triangle"></i> Weak Password</span>';
			            } else if (score < 5) {
			                desc = '<span style="color:#FF8C00; font-weight:bold;"><i class="fas fa-exclamation-triangle"></i> Medium Password</span>';
			            } else if (score >= 5) {
			                desc = '<span style="color:green; font-weight:bold;"><i class="fas fa-check"></i> Strong Password</span>';
			            }

			            $('#strength_alert').html(desc);

			        }
			    });
				
			});
			
			
			//]]>