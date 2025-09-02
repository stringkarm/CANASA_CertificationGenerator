function generateCOE() {
    const employeeName = document.getElementById('Name').value;
    const position = document.getElementById('Position').value;
    const department = document.getElementById('Department').value;
    const dateHired = document.getElementById('Hired').value;
    const hrManager = document.getElementById('Manager').value;

    const certificateData = {
        name: employeeName,
        position: position,
        department: department,
        dateHired: dateHired,
        hrManager: hrManager
    };

    localStorage.setItem('certificateData', JSON.stringify(certificateData));
    window.location.href = 'certificate.html'; 
}