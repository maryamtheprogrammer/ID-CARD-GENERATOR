function generateIdCard(e){
    e.preventDefault();
    let studentName=document.getElementById('student-name').value;
    let targetStudentName=document.getElementById('generated-student-name');
    targetStudentName.innerHTML=studentName;

    let age=document.getElementById('age').value;
    let targetAge=document.getElementById('generated-age');
    targetAge.innerHTML=age;

    let schoolName=document.getElementById('school-name').value;
    let targetSchoolName=document.getElementById('generated-school-name');
    targetSchoolName.innerHTML=schoolName;

    let classs =document.getElementById('classs').value;
    let targetClass=document.getElementById('generated-class');
    targetClass.innerHTML=classs;

    let generatedIDCardContainer =document.getElementById('generated-id-card');
    generatedIDCardContainer.style.display = 'block';
}

function previewImage(event){
    event.preventDefault();
    let targetImageContainer =document.getElementById('student-image');
    targetImageContainer.src = URL.createObjectURL(event.target.files[0]);
}