const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('usuario');

const usernameElement = document.querySelector('.header__username');
usernameElement.textContent = username;

const appointmentsTable = document.querySelector('.appointments__table');

const cancelButtons = document.querySelectorAll('.appointments__cancel-btn');
cancelButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const appointmentRow = button.parentNode.parentNode;
    appointmentRow.remove();
  });
});

const newAppointmentForm = document.querySelector('.new-appointment__form');
const specialtySelect = document.querySelector('#specialty');
const doctorSelect = document.querySelector('#doctor');

const doctorsBySpecialty = {
  especialidad1: ['Dr. Favaloro'],
  especialidad2: ['Dr. Fernandez'],
  especialidad3: ['Dra. Lopez', 'Dra. Berni'],
  especialidad4: []
};

function updateDoctorOptions() {
  const specialty = specialtySelect.value;
  const doctors = doctorsBySpecialty[specialty] || [];

  doctorSelect.innerHTML = '';

  if (doctors.length === 0) {
    const option = document.createElement('option');
    option.value = '';
    option.textContent = 'No hay médicos disponibles';
    doctorSelect.appendChild(option);
    doctorSelect.disabled = true;
  } else {
    doctorSelect.disabled = false;
    doctors.forEach(doctor => {
      const option = document.createElement('option');
      option.value = doctor;
      option.textContent = doctor;
      doctorSelect.appendChild(option);
    });
  }
}

specialtySelect.addEventListener('change', updateDoctorOptions);

updateDoctorOptions();

newAppointmentForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const specialty = specialtySelect.value;
  const doctor = doctorSelect.value;
  const date = document.querySelector('#date').value;
  const time = document.querySelector('#time').value;
  const email = document.querySelector('#email').value;
  const observations = document.querySelector('#observations').value;

  if (!specialty || !doctor || !date || !time || !email) {
    alert('Verifique los datos del turno');
    return;
  }

  const newAppointmentRow = document.createElement('tr');
  newAppointmentRow.innerHTML = `
    <td class="appointments__table-cell">${date}</td>
    <td class="appointments__table-cell">${time}</td>
    <td class="appointments__table-cell">${specialtySelect.options[specialtySelect.selectedIndex].text}</td>
    <td class="appointments__table-cell">${doctor}</td>
    <td class="appointments__table-cell">${observations}</td>
    <td class="appointments__table-cell"><button class="appointments__cancel-btn">Cancelar</button></td>
  `;

  const cancelButton = newAppointmentRow.querySelector('.appointments__cancel-btn');
  cancelButton.addEventListener('click', () => {
    newAppointmentRow.remove();
  });

  appointmentsTable.appendChild(newAppointmentRow);
  alert('Turno reservado correctamente');
  newAppointmentForm.reset();
});