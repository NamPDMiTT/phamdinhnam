function validate() {
    var flag = true;

    // note
    var note = document.getElementById('note');
    var title_note = document.getElementById('title-note');
    if (note.value.length > 200) {
        note.style = 'background: yellow';
        note.focus();
        title_note.innerHTML = 'Ghi chú tối đa 200 ký tự!';
        flag = false;
    } else {
        note.style = 'background: white';
        title_note.innerHTML = '';
    }

    // national
    var national = document.getElementById('national');
    var title_nationality = document.getElementById('title-nationality');
    if (national.value == '0') {
        national.style = 'background: yellow';
        national.focus();
        title_nationality.innerHTML = 'Bạn chưa chọn quốc tịch!';
        flag = false;
    } else {
        national.style = 'background: white';
        title_nationality.innerHTML = '';
    }

    // hobbies
    var hobbies = document.getElementsByName('checkbox');
    var st = document.getElementById('st');
    var title_hobby = document.getElementById('title-hobby');
    var count = 0;
    for (var i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked) {
            count++;
        }
    }
    if (count == 0) {
        st.style = 'background: yellow';
        title_hobby.innerHTML = 'Bạn phải chọn ít nhất 1 sở thích!';
        flag = false;
    } else {
        st.style = 'background: white';
        title_hobby.innerHTML = '';
    }

    // gender
    var gender = document.getElementsByName('gender');
    var gt = document.getElementById('gt');
    var title_gender = document.getElementById('title-gender');
    if (!gender[0].checked && !gender[1].checked) {
        gt.style = 'background: yellow';
        title_gender.innerHTML = 'Bạn chưa chọn giới tính!';
        flag = false;
    } else {
        gt.style = 'background: white';
        title_gender.innerHTML = '';
    }

    // email
    var email = document.getElementById('email');
    var title_email = document.getElementById('title-email');
    var req = /\w+([\.-]?\w+)*@\w+(\.\w{2,3})+$/;
    if (!req.test(email.value)) {
        email.style = 'background: yellow';
        email.focus();
        title_email.innerHTML = 'Bạn chưa nhập email!';
        flag = false;
    } else {
        email.style = 'background: white';
        title_email.innerHTML = '';
    }

    // fullname
    var fullname = document.getElementById('fullname');
    var title_hoten = document.getElementById('title-name');
    if (fullname.value == '') {
        fullname.style = 'background: yellow';
        fullname.focus();
        title_hoten.innerHTML = 'Bạn chưa nhập họ và tên!';
        flag = false;
    } else {
        fullname.style = 'background: white';
        title_hoten.innerHTML = '';
    }

    // mssv
    var mssv = document.getElementById('mssv');
    var title_mssv = document.getElementById('title-mssv');
    if (mssv.value == '') {
        mssv.style = 'background: yellow';
        mssv.focus();
        title_mssv.innerHTML = 'Bạn chưa nhập mã sinh viên!';
        flag = false;
    } else {
        mssv.style = 'background: white';
        title_mssv.innerHTML = '';
    }

    if (flag) {
        alert('Đăng ký thành công!');
    }
    return flag;

}