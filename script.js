// script.js
document.addEventListener('DOMContentLoaded', () => {

    // --- ELEMENTOS DO DOM ---
    const form = document.getElementById('booking-form');
    const steps = Array.from(form.querySelectorAll('.form-step'));
    const nextBtn = form.querySelector('.next-btn');
    const prevBtn = form.querySelector('.prev-btn');
    const submitBtn = form.querySelector('.submit-btn');
    
    // Elementos do Resumo
    const summaryService = document.getElementById('summary-service');
    const summaryDate = document.getElementById('summary-date');
    const summaryTime = document.getElementById('summary-time');
    const summaryPrice = document.getElementById('summary-price');
    
    // Modal
    const modal = document.getElementById('confirmation-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    
    let currentStep = 0;
    const bookingData = {
        service: null,
        price: null,
        date: null,
        time: null,
    };

    // --- DADOS MOCKADOS ---
    const services = [
        { id: 'corte', name: 'Corte Moderno', price: 50.00 },
        { id: 'barba', name: 'Barba Terapia', price: 40.00 },
        { id: 'combo', name: 'Combo (Corte + Barba)', price: 85.00 },
        { id: 'coloracao', name: 'Coloração', price: 70.00 }
    ];

    // --- FUNÇÕES ---

    // Inicializa os serviços no passo 1
    function initializeServices() {
        const serviceContainer = document.querySelector('.service-options');
        let serviceHTML = '';
        services.forEach(service => {
            serviceHTML += `
                <div class="service-card" data-id="${service.id}" data-price="${service.price}" data-name="${service.name}">
                    <h4>${service.name}</h4>
                    <p class="price">R$ ${service.price.toFixed(2)}</p>
                </div>
            `;
        });
        serviceContainer.innerHTML = serviceHTML;
    }

    // Navega para o próximo ou anterior passo
    function navigateToStep(stepIndex) {
        steps[currentStep].classList.remove('active');
        currentStep = stepIndex;
        steps[currentStep].classList.add('active');
        updateButtonVisibility();
    }

    // Atualiza a visibilidade dos botões de navegação
    function updateButtonVisibility() {
        prevBtn.style.display = currentStep > 0 ? 'inline-block' : 'none';
        nextBtn.style.display = currentStep < steps.length - 1 ? 'inline-block' : 'none';
        submitBtn.style.display = currentStep === steps.length - 1 ? 'inline-block' : 'none';
    }

    // Gera horários disponíveis (simulação)
    function generateTimeSlots() {
        const timeContainer = document.getElementById('time-slots-container');
        timeContainer.innerHTML = ''; // Limpa os horários anteriores
        const availableTimes = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
        availableTimes.forEach(time => {
            const timeSlot = document.createElement('div');
            timeSlot.className = 'time-slot';
            timeSlot.textContent = time;
            timeContainer.appendChild(timeSlot);
        });
    }

    // Atualiza o resumo do agendamento
    function updateSummary() {
        summaryService.textContent = bookingData.service || '--';
        summaryPrice.textContent = bookingData.price ? `R$ ${bookingData.price.toFixed(2)}` : 'R$ --';
        summaryDate.textContent = bookingData.date ? new Date(bookingData.date + 'T00:00:00').toLocaleDateString('pt-BR') : '--';
        summaryTime.textContent = bookingData.time || '--';
    }

    // Valida o passo atual
    function validateCurrentStep() {
        if (currentStep === 0 && !bookingData.service) {
            alert('Por favor, selecione um serviço.');
            return false;
        }
        if (currentStep === 1 && (!bookingData.date || !bookingData.time)) {
            alert('Por favor, selecione data e horário.');
            return false;
        }
        return true;
    }

    // --- EVENT LISTENERS ---

    nextBtn.addEventListener('click', () => {
        if (validateCurrentStep()) {
            navigateToStep(currentStep + 1);
        }
    });

    prevBtn.addEventListener('click', () => {
        navigateToStep(currentStep - 1);
    });

    // Seleção de Serviço
    document.querySelector('.service-options').addEventListener('click', (e) => {
        const card = e.target.closest('.service-card');
        if (card) {
            document.querySelectorAll('.service-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            bookingData.service = card.dataset.name;
            bookingData.price = parseFloat(card.dataset.price);
            updateSummary();
        }
    });

    // Seleção de Data
    document.getElementById('date').addEventListener('change', (e) => {
        bookingData.date = e.target.value;
        generateTimeSlots(); // Gera novos horários quando a data muda
        bookingData.time = null; // Reseta o horário selecionado
        updateSummary();
    });

    // Seleção de Horário
    document.getElementById('time-slots-container').addEventListener('click', (e) => {
        if (e.target.classList.contains('time-slot')) {
            document.querySelectorAll('.time-slot').forEach(slot => slot.classList.remove('selected'));
            e.target.classList.add('selected');
            bookingData.time = e.target.textContent;
            updateSummary();
        }
    });
    
    // Submissão do Formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        if (!name || !email) {
            alert('Por favor, preencha todos os seus dados.');
            return;
        }
        console.log('Dados do Agendamento:', { ...bookingData, name, email });
        modal.classList.add('visible');
    });
    
    // Fechar Modal
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('visible');
        // Opcional: resetar o formulário após fechar
        // location.reload(); 
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('visible');
        }
    });

    // --- INICIALIZAÇÃO ---
    feather.replace(); // Ativa os ícones
    initializeServices();
    updateButtonVisibility();

});