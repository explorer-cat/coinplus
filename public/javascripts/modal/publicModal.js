/**
 * 로그인 모달창
 * modalId : 모달창 id
 * title : 모달 제목
 *
 */

const setLoginModal = (arr) => {
    var str = "";
    let div = document.createElement('div');
   // div.id = arr[0].divID;
    div.id = "test"
    document.body.appendChild(div);
            str = '<div id="loginModal" class="create_modal_drag">'
            str += '<div class="public-modal-container modal_radius_6">'
            str += '<div class="modal_header temp_modal_header modal_header_padding_24 ">'
            str += '<div class="new_modal_title">로그인</div>'
            str += '<img class="modal_close_img">'
            str += '</div>'
            str += '<div class ="login_modal_content temp_modal_body modal_body_padding_24">'
            str += '<div class ="coinbuying_login_group">'
            str += '<div class ="login_input_group">'
            str += '<input type = "text" class ="login_email public_text margin-tb-4" placeholder = "아이디">'
            str += '<input type = "text" class ="public_text margin-tb-4" placeholder = "비밀번호">'
            str += '</div>'
            str += '<div class ="coinbuying_login_btn margin-l-4" id = "coinbuying_login">로그인</div>'
            str += '</div>'
            str += '<div class ="flex">'
            str += '<div class ="margin-t-8 margin-r-8">회원가입</div>'
            str += '<div class ="margin-t-8">체험하기</div>'
            str += '</div>'
            str += '<div class="create_modal-footer margin_top_16" style="display: inline-block; width: 100%;">'
            str += '</div>'
            str += "</div>"
            str += '<div class="modal_button_box">';
            // str += '<input type = "button" class = "public_button margin-r-8" value = "로그인"/>'
            // str += '<input type = "button" class = "public_empty_button" value = "취소"/>'
            str += '</div>'
            str += "</div>"
            str += '</div>'
            str += '</div>'



    document.getElementById(div.id).innerHTML = str;

    $('#loginModal').css({
        "display": "block",
    });

    $(window).resize(function(){
        ResetNewModalDragging('.public-modal-container');
    });

    SetNewModalDragging('.public-modal-container', '.member_info_modal_header');

    document.querySelector(".modal_close_img").addEventListener("click",function() {
        document.getElementById("loginModal").remove();
    })

    //로그인 시도
    document.getElementById("coinbuying_login").addEventListener("click",function() {
        let userEmail = document.getElementsByClassName("login_email")[0].value;

        //정상적인 이메일인지 체크
        if(!isEmailForm(userEmail)) {
            alert("올바르지 않은 이메일 입니다.");
            return;
        }

        //필수값이 모두 들어가있는지 확인


        //로그인 요청
        $.ajax({
            url: "http://54.215.113.3:8081/user/login",
            type: "post",
            async: false,
            dataType: "JSON",//서버로 부터 돌려받을 데이터의 타입
                data: {
                    "email" : "12323@naver.com",
                    "password" : "12345"
                },
                success: function (result) {
                    //정상적인 회원가입이 됐을 경우.
                    alert("성공!",result)
                }
            });
    })

    //esc로 모달창 닫기 이벤트
    window.onkeyup = function(e) {
        var key = e.keyCode ? e.keyCode : e.which;

        if(key == 27) {
            $("#"+div.id).remove();
        }
    }
}


const setRegisterModal = (arr) => {
    var str = "";
    let div = document.createElement('div');
   // div.id = arr[0].divID;
    div.id = "test"
    document.body.appendChild(div);
            str = '<div id="loginModal" class="create_modal_drag">'
            str += '<div class="register-modal-container modal_radius_6">'
            str += '<div class="modal_header temp_modal_header modal_header_padding_24 ">'
            str += '<div class="new_modal_title">회원가입</div>'
            str += '<img class="modal_close_img">'
            str += '</div>'
            str += '<div class ="login_modal_content temp_modal_body modal_body_padding_24">'
            str += '<div class ="coinbuying_login_group">'
            str += '<div class ="login_input_group">'
            str += '<input type = "text" class ="register_email public_text margin-tb-4" placeholder = "이메일">'
            str += '<input type = "password" class ="register_password public_text margin-tb-4" placeholder = "비밀번호">'
            str += '<input type = "text" class ="register_nickname public_text margin-tb-4" placeholder = "닉네임">'
            str += '<input type = "text" class ="register_api public_text margin-tb-4" placeholder = "빗썸 API KEY">'
            str += '<input type = "text" class ="register_api public_text margin-tb-4" placeholder = "업비트 API KEY">'
            str += '</div>'
            str += '</div>'
            str += '<div class ="flex">'
            str += '<div class ="coinbuying_login_btn margin-l-4" id = "register_btn">회원가입</div>'
            str += '</div>'
            str += '<div class="create_modal-footer margin_top_16" style="display: inline-block; width: 100%;">'
            str += '</div>'
            str += "</div>"
            str += '<div class="modal_button_box">';
            // str += '<input type = "button" class = "public_button margin-r-8" value = "로그인"/>'
            // str += '<input type = "button" class = "public_empty_button" value = "취소"/>'
            str += '</div>'
            str += "</div>"
            str += '</div>'
            str += '</div>'
    document.getElementById(div.id).innerHTML = str;

    $('#loginModal').css({
        "display": "block",
    });
    

    $(window).resize(function(){
        ResetNewModalDragging('.register-modal-container');
    });

    SetNewModalDragging('.register-modal-container', '.member_info_modal_header');


    document.querySelector(".modal_close_img").addEventListener("click",function() {
        document.getElementById("loginModal").remove();
    })

    document.getElementById("register_btn").addEventListener("click",function() {

    let userEmail = document.querySelector(".register_email").value;
    
    //이메일 검증
    if(!isEmailForm(userEmail)) {
        alert("올바르지않은 이메일 입니다.")
        return false;
    }

    //        // mode:'no-cors',
        // credentials: 'include',
    //서버로 회원가입 요청
    fetch("http://54.215.113.3:8081/user/signup", {
        method: "POST",
        dataType:"json",
        // mode:'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: "성우입니다",
            email :"realemail@naver.com",
            password : "123123"
     }),
      }).then((response) => console.log(response));

    })

    //esc로 모달창 닫기 이벤트
    window.onkeyup = function(e) {
        var key = e.keyCode ? e.keyCode : e.which;

        if(key == 27) {
            $("#"+div.id).remove();
        }
    }
}

//이메일 검증
const isEmailForm = (userEmail) => {
    var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // 검증에 사용할 정규식 변수 regExp에 저장
     
    if (userEmail.match(regExp) != null) { 
        return true;
    }
    else {
        return false;
    }
}

/**
 * 드래그로 인한 모달 창 위치 초기화
 * @param ModalCotentId
 * @constructor
 */
function ResetNewModalDragging(ModalCotentId) {
    const ModalContent = $(ModalCotentId);

    if((($(window).height()/2)-(ModalContent.height()/2)) >= 0){
        ModalContent.css({
            "left": (($(window).width()/2)-(ModalContent.outerWidth()/2)),
            "top":(($(window).height()/2)-(ModalContent.outerHeight()/2))
        });
    }
    else{
        ModalContent.css({
            "left": (($(window).width()/2)-(ModalContent.outerWidth()/2)),
            "top":0
        });
    }
}


/**
 * 모달 창 드래그 적용 및 위치 조정
 * @param ModalContentId
 * @param HeaderId
 * @constructor
 */
function SetNewModalDragging(ModalContentId, HeaderId) {
    const ModalContent = $(ModalContentId);

    if(HeaderId){
        ModalContent.draggable({
            containment: "parent",
            handle: HeaderId
        });
    }


    if((($(window).height()/2)-(ModalContent.height()/2)) >= 0){
        ModalContent.css({
            "left": (($(window).width()/2)-(ModalContent.outerWidth()/2)),
            "top":(($(window).height()/2)-(ModalContent.outerHeight()/2))
        });
    }
    else{
        ModalContent.css({
            "left": (($(window).width()/2)-(ModalContent.outerWidth()/2)),
            "top":0
        });
    }

}

