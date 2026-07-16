// ===== INITIAL DEFAULT DATA (MALE RETREAT STYLE) =====
const DEFAULT_DATA = {
    eventTitle: "Quadro de Acomodações",
    eventSubtitle: "Retiro Masculino — Distribuição de Quartos & Público",
    coletivos: [
        {
            id: 'Q01', name: 'Quarto 01', beds: 20,
            bedType: '4 beliches (sup. + inf.) + 4 camas avulsas',
            showers: 3, toilets: 2, sinks: 1,
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['youth', 'general'],
            tagLabels: ['Jovens', 'Público Geral'],
            note: 'Banheiro interno'
        },
        {
            id: 'Q02', name: 'Quarto 02', beds: 20,
            bedType: '4 beliches (sup. + inf.) + 4 camas avulsas',
            showers: 3, toilets: 2, sinks: 1,
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['youth', 'general'],
            tagLabels: ['Jovens', 'Público Geral'],
            note: 'Banheiro interno'
        },
        {
            id: 'Q03', name: 'Quarto 03', beds: 20,
            bedType: '4 beliches (sup. + inf.) + 4 camas avulsas',
            showers: 3, toilets: 2, sinks: 1,
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['youth', 'general'],
            tagLabels: ['Jovens', 'Público Geral'],
            note: 'Banheiro interno'
        },
        {
            id: 'Q04', name: 'Quarto 04', beds: 20,
            bedType: '4 beliches (sup. + inf.) + 4 camas avulsas',
            showers: 3, toilets: 2, sinks: 1,
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['youth', 'general'],
            tagLabels: ['Jovens', 'Público Geral'],
            note: 'Banheiro interno'
        },
        {
            id: 'Q05', name: 'Quarto 05', beds: 20,
            bedType: '4 beliches (sup. + inf.) + 4 camas avulsas',
            showers: 3, toilets: 2, sinks: 1,
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['general'],
            tagLabels: ['Público Geral'],
            note: 'Priorizar camas de baixo para os mais velhos do público geral'
        },
        {
            id: 'Q06', name: 'Quarto 06', beds: 20,
            bedType: '4 beliches (sup. + inf.) + 4 camas avulsas',
            showers: 3, toilets: 2, sinks: 1,
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['general'],
            tagLabels: ['Público Geral'],
            note: 'Priorizar camas de baixo para os mais velhos do público geral'
        },
        {
            id: 'Q07', name: 'Quarto 07', beds: 20,
            bedType: '4 beliches (sup. + inf.) + 4 camas avulsas',
            showers: 3, toilets: 2, sinks: 1,
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['youth', 'general'],
            tagLabels: ['Jovens', 'Público Geral'],
            note: 'Banheiro interno'
        },
        {
            id: 'Q08', name: 'Quarto 08', beds: 20,
            bedType: '4 beliches (sup. + inf.) + 4 camas avulsas',
            showers: 3, toilets: 2, sinks: 1,
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['youth', 'general'],
            tagLabels: ['Jovens', 'Público Geral'],
            note: 'Banheiro interno'
        },
        {
            id: 'Q09', name: 'Quarto 09', beds: 22,
            bedType: '22 camas individuais',
            showers: 4, toilets: 4, sinks: 1,
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['leadership', 'general'],
            tagLabels: ['Liderança', 'Público Geral'],
            note: 'Excelente estrutura de banheiros e acessibilidade térrea'
        },
        {
            id: 'Q10', name: 'Quarto 10', beds: 12,
            bedType: '6 beliches',
            showers: 1, toilets: 1, sinks: 0,
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['youth'],
            tagLabels: ['Jovens'],
            note: 'Banheiro interno modesto'
        },
        {
            id: 'Q11', name: 'Quarto 11', beds: 20,
            bedType: '10 beliches',
            showers: 1, toilets: 1, sinks: 0,
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['youth'],
            tagLabels: ['Jovens'],
            note: 'Banheiro interno modesto'
        }
    ],

    suitesEscada: [
        {
            id: 'S01', name: 'Suíte 01', beds: 3,
            bedType: '1 cama casal + 1 solteiro',
            bath: 'private', bathLabel: 'Privativo',
            access: 'stairs', accessLabel: 'Escada',
            tags: ['leadership'],
            tagLabels: ['Liderança']
        },
        {
            id: 'S02', name: 'Suíte 02', beds: 3,
            bedType: '1 cama casal + 1 solteiro',
            bath: 'private', bathLabel: 'Privativo',
            access: 'stairs', accessLabel: 'Escada',
            tags: ['leadership'],
            tagLabels: ['Liderança']
        },
        {
            id: 'S03', name: 'Suíte 03', beds: 3,
            bedType: '1 cama casal + 1 solteiro',
            bath: 'private', bathLabel: 'Privativo',
            access: 'stairs', accessLabel: 'Escada',
            tags: ['leadership'],
            tagLabels: ['Liderança']
        },
        {
            id: 'S04', name: 'Suíte 04', beds: 3,
            bedType: '1 cama casal + 1 solteiro',
            bath: 'private', bathLabel: 'Privativo',
            access: 'stairs', accessLabel: 'Escada',
            tags: ['leadership'],
            tagLabels: ['Liderança']
        },
        {
            id: 'S05', name: 'Suíte 05', beds: 2,
            bedType: '1 cama casal',
            bath: 'private', bathLabel: 'Privativo',
            access: 'stairs', accessLabel: 'Escada',
            tags: ['leadership'],
            tagLabels: ['Liderança']
        },
        {
            id: 'S06', name: 'Suíte 06', beds: 4,
            bedType: '1 cama casal + 2 solteiro',
            bath: 'private', bathLabel: 'Privativo',
            access: 'stairs', accessLabel: 'Escada',
            tags: ['leadership', 'kitchen'],
            tagLabels: ['Liderança', 'Equipe de Cozinha']
        }
    ],

    suitesPequena: [
        {
            id: 'S07', name: 'Suíte 07', beds: 4,
            bedType: '1 cama casal + 2 solteiro',
            bath: 'private', bathLabel: 'Privativo',
            access: 'stairs-small', accessLabel: 'Pequeno lance',
            tags: ['leadership', 'kitchen'],
            tagLabels: ['Liderança', 'Equipe de Cozinha']
        },
        {
            id: 'S08', name: 'Suíte 08', beds: 4,
            bedType: '1 cama casal + 2 solteiro',
            bath: 'private', bathLabel: 'Privativo',
            access: 'stairs-small', accessLabel: 'Pequeno lance',
            tags: ['leadership', 'kitchen'],
            tagLabels: ['Liderança', 'Equipe de Cozinha']
        },
        {
            id: 'S09', name: 'Suíte 09', beds: 2,
            bedType: '1 cama casal',
            bath: 'private', bathLabel: 'Privativo',
            access: 'stairs-small', accessLabel: 'Pequeno lance',
            tags: ['leadership'],
            tagLabels: ['Liderança']
        }
    ],

    casinha: [
        {
            id: 'CC1', name: 'Quarto Casinha 1', beds: 3,
            bedType: '3 camas individuais',
            bath: 'shared', bathLabel: 'Compartilhado',
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['kitchen', 'general'],
            tagLabels: ['Equipe de Cozinha', 'Público Geral']
        },
        {
            id: 'CC2', name: 'Quarto Casinha 2', beds: 3,
            bedType: '3 camas individuais',
            bath: 'shared', bathLabel: 'Compartilhado',
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['kitchen', 'general'],
            tagLabels: ['Equipe de Cozinha', 'Público Geral']
        },
        {
            id: 'CC3', name: 'Quarto Casinha 3', beds: 3,
            bedType: '3 camas individuais',
            bath: 'shared', bathLabel: 'Compartilhado',
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['kitchen', 'general'],
            tagLabels: ['Equipe de Cozinha', 'Público Geral']
        }
    ],

    notes: [
        {
            id: 'N1', type: 'warning', emoji: '⚠️', title: 'Distribuição Fixo das Camas',
            content: 'Não é viável a reorganização física das camas no local. A melhor adaptação é posicionar pessoas de mais idade ou com restrições nas camas inferiores ou trazer colchões para o chão, se necessário.'
        },
        {
            id: 'N2', type: 'info', emoji: '🍳', title: 'Acomodação da Equipe da Cozinha',
            content: 'Alguns quartos da Casinha Central e Suítes de fácil acesso (S07, S08) são estrategicamente localizados próximos à cozinha para os voluntários do serviço.'
        },
        {
            id: 'N3', type: 'success', emoji: '⛪', title: 'Liderança e Palestrantes',
            content: 'As suítes privativas oferecem mais privacidade e banheiros privativos, sendo as indicadas para pastores, líderes convidados e palestrantes.'
        }
    ]
};

// Global State
let appData = {};
let currentFilter = 'all';

// Constants mapping
const TAG_LABELS = {
    leadership: 'Liderança / Pastores',
    kitchen: 'Equipe de Cozinha',
    youth: 'Jovens',
    general: 'Público Geral'
};

const ACCESS_LABELS = {
    accessible: 'Térreo',
    stairs: 'Escada',
    'stairs-small': 'Pequeno lance'
};

// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ===== CONFIRM MODAL =====
let confirmCallback = null;
function showConfirm(message, callback) {
    document.getElementById('confirmMessage').textContent = message;
    document.getElementById('confirmOverlay').classList.add('open');
    confirmCallback = callback;
}

document.getElementById('confirmCancel').addEventListener('click', closeConfirm);
document.getElementById('confirmClose').addEventListener('click', closeConfirm);
document.getElementById('confirmYes').addEventListener('click', () => {
    if (confirmCallback) confirmCallback();
    closeConfirm();
});

function closeConfirm() {
    document.getElementById('confirmOverlay').classList.remove('open');
    confirmCallback = null;
}

// ===== EDIT/ADD MODAL =====
let activeSection = null;
let activeItemIndex = null; // null if creating a new item
let activeItemSub = null;   // for suites (suitesEscada, suitesPequena, casinha)

const modal = document.getElementById('editModal');
const modalOverlay = document.getElementById('modalOverlay');

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalCancel').addEventListener('click', closeModal);
document.getElementById('modalSave').addEventListener('click', saveModalData);

function openModal(title, formHTML) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalBody').innerHTML = formHTML;
    modalOverlay.classList.add('open');
    
    // Add logic to toggle tags in form
    const tagButtons = document.querySelectorAll('.form-tag');
    tagButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
        });
    });
}

function closeModal() {
    modalOverlay.classList.remove('open');
    activeSection = null;
    activeItemIndex = null;
    activeItemSub = null;
}

// ===== DATABASE LOAD / SAVE =====
function loadData() {
    const stored = localStorage.getItem('accommodation_chart_data');
    if (stored) {
        try {
            appData = JSON.parse(stored);
            // Ensure compatibility if older format
            if (!appData.eventTitle) appData.eventTitle = DEFAULT_DATA.eventTitle;
            if (!appData.eventSubtitle) appData.eventSubtitle = DEFAULT_DATA.eventSubtitle;
            if (!appData.notes) appData.notes = DEFAULT_DATA.notes;
        } catch (e) {
            appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
        }
    } else {
        appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
}

function saveData() {
    localStorage.setItem('accommodation_chart_data', JSON.stringify(appData));
    updateStatsAndCounters();
}

// ===== RENDER DATA =====
function renderAll() {
    document.getElementById('eventTitle').textContent = appData.eventTitle;
    document.getElementById('eventSubtitle').textContent = appData.eventSubtitle;

    renderColetivos();
    renderSuites(appData.suitesEscada, 'tbodySuitesEscada', 'suitesEscada');
    renderSuites(appData.suitesPequena, 'tbodySuitesPequena', 'suitesPequena');
    renderSuites(appData.casinha, 'tbodyCasinha', 'casinha');
    
    renderRecommendations();
    renderNotes();
    updateStatsAndCounters();
    
    applyFilter(currentFilter);
}

function renderColetivos() {
    const tbody = document.getElementById('tbodyColetivos');
    if (!tbody) return;
    
    tbody.innerHTML = appData.coletivos.map((room, idx) => `
        <tr data-tags="${room.tags.join(',')}" data-id="${room.id}">
            <td class="cell-room">${room.name}</td>
            <td class="cell-beds">${room.beds}</td>
            <td class="cell-type">${room.bedType}</td>
            <td><span class="cell-facility"><span class="cell-facility-icon">🚿</span> ${room.showers}</span></td>
            <td><span class="cell-facility"><span class="cell-facility-icon">🚽</span> ${room.toilets}</span></td>
            <td><span class="cell-facility"><span class="cell-facility-icon">🧼</span> ${room.sinks}</span></td>
            <td><span class="access-badge ${room.access}">${ACCESS_LABELS[room.access] || room.access}</span></td>
            <td><div class="tags-container">${room.tags.map(t => `<span class="tag ${t}">${TAG_LABELS[t]}</span>`).join('')}</div></td>
            <td>
                <div class="row-actions">
                    <button class="btn-icon" onclick="editItem('coletivos', ${idx})" title="Editar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                    <button class="btn-icon btn-danger" onclick="deleteItem('coletivos', ${idx})" title="Excluir"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M19 7l-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3M4 7h16"/></svg></button>
                </div>
            </td>
        </tr>
    `).join('');
}

function renderSuites(list, tbodyId, subSection) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;
    
    tbody.innerHTML = list.map((suite, idx) => `
        <tr data-tags="${suite.tags.join(',')}" data-id="${suite.id}">
            <td class="cell-room">${suite.name}</td>
            <td class="cell-beds">${suite.beds}</td>
            <td class="cell-type">${suite.bedType}</td>
            <td><span class="bath-badge ${suite.bath}">${suite.bath === 'private' ? 'Privativo' : 'Compartilhado'}</span></td>
            <td><span class="access-badge ${suite.access}">${ACCESS_LABELS[suite.access] || suite.access}</span></td>
            <td><div class="tags-container">${suite.tags.map(t => `<span class="tag ${t}">${TAG_LABELS[t]}</span>`).join('')}</div></td>
            <td>
                <div class="row-actions">
                    <button class="btn-icon" onclick="editItem('suites', ${idx}, '${subSection}')" title="Editar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                    <button class="btn-icon btn-danger" onclick="deleteItem('suites', ${idx}, '${subSection}')" title="Excluir"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M19 7l-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3M4 7h16"/></svg></button>
                </div>
            </td>
        </tr>
    `).join('');
}

function renderRecommendations() {
    const grid = document.getElementById('recommendationsGrid');
    if (!grid) return;
    
    // Auto calculate matching rooms for descriptions
    const getMatchingIds = (tag) => {
        let rooms = [];
        appData.coletivos.forEach(r => { if(r.tags.includes(tag)) rooms.push(r.id); });
        appData.suitesEscada.forEach(r => { if(r.tags.includes(tag)) rooms.push(r.id); });
        appData.suitesPequena.forEach(r => { if(r.tags.includes(tag)) rooms.push(r.id); });
        appData.casinha.forEach(r => { if(r.tags.includes(tag)) rooms.push(r.id); });
        return rooms;
    };

    const recs = [
        {
            emoji: '👑', title: 'Liderança / Pastores', filter: 'leadership',
            desc: 'Recomenda-se alocação em suítes com banheiro privativo para maior privacidade, descanso e preparação das mensagens.',
            rooms: getMatchingIds('leadership')
        },
        {
            emoji: '🍳', title: 'Equipe de Cozinha', filter: 'kitchen',
            desc: 'Necessitam de fácil mobilidade no térreo e proximidade dos refeitórios/cozinha. Geralmente utilizam a Casinha Central.',
            rooms: getMatchingIds('kitchen')
        },
        {
            emoji: '⚡', title: 'Jovens', filter: 'youth',
            desc: 'Alocação ideal nos quartos coletivos de grande capacidade com beliches. Podem utilizar os beliches superiores sem restrições.',
            rooms: getMatchingIds('youth')
        },
        {
            emoji: '👤', title: 'Público Geral', filter: 'general',
            desc: 'Distribuídos em dormitórios coletivos com banheiro interno. Atentar para direcionar pessoas mais velhas ou com necessidades para as camas de baixo.',
            rooms: getMatchingIds('general')
        }
    ];

    grid.innerHTML = recs.map(rec => `
        <div class="rec-card" data-filter="${rec.filter}">
            <div class="rec-card-header">
                <span class="rec-emoji">${rec.emoji}</span>
                <h4>${rec.title}</h4>
            </div>
            <p>${rec.desc}</p>
            <div class="rec-rooms">
                ${rec.rooms.length > 0 ? rec.rooms.map(r => `<span class="rec-room-tag">${r}</span>`).join('') : '<span class="rec-room-tag" style="opacity:0.6;background:none;border-style:dashed;">Nenhum quarto</span>'}
            </div>
        </div>
    `).join('');
}

function renderNotes() {
    const grid = document.getElementById('notesGrid');
    if (!grid) return;
    
    grid.innerHTML = appData.notes.map((note, idx) => `
        <div class="note-card ${note.type || 'info'}">
            <div class="note-icon">${note.emoji || '📋'}</div>
            <div class="note-content" style="flex:1;">
                <h4>${note.title}</h4>
                <p>${note.content}</p>
            </div>
            <div class="note-actions" style="display:flex;flex-direction:column;gap:4px;">
                <button class="btn-icon" style="width:24px;height:24px;padding:0;" onclick="editNote(${idx})" title="Editar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                <button class="btn-icon btn-danger" style="width:24px;height:24px;padding:0;" onclick="deleteNote(${idx})" title="Excluir"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M19 7l-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3M4 7h16"/></svg></button>
            </div>
        </div>
    `).join('') + `
        <div class="note-card" style="border-style:dashed;align-items:center;justify-content:center;cursor:pointer;background:none;" onclick="addNote()">
            <span style="font-size:1.5rem;color:var(--accent-success);margin-right:8px;">➕</span>
            <span style="font-weight:600;color:var(--text-secondary);">Adicionar Observação</span>
        </div>
    `;
}

function updateStatsAndCounters() {
    let totalB = 0;
    
    appData.coletivos.forEach(r => totalB += parseInt(r.beds) || 0);
    appData.suitesEscada.forEach(r => totalB += parseInt(r.beds) || 0);
    appData.suitesPequena.forEach(r => totalB += parseInt(r.beds) || 0);
    appData.casinha.forEach(r => totalB += parseInt(r.beds) || 0);
    
    const countRooms = appData.coletivos.length + appData.suitesEscada.length + appData.suitesPequena.length + appData.casinha.length;
    
    document.getElementById('totalBeds').textContent = totalB;
    document.getElementById('totalRooms').textContent = countRooms;
    document.getElementById('totalCapacity').textContent = totalB;
    
    document.getElementById('coletivoBadge').textContent = `${appData.coletivos.length} Quarto(s)`;
    const totalSuites = appData.suitesEscada.length + appData.suitesPequena.length + appData.casinha.length;
    document.getElementById('suiteBadge').textContent = `${totalSuites} Unidade(s)`;
    
    document.getElementById('escadaCount').textContent = `(${appData.suitesEscada.length})`;
    document.getElementById('pequenaCount').textContent = `(${appData.suitesPequena.length})`;
    document.getElementById('casinhaCount').textContent = `(${appData.casinha.length})`;
}

// ===== ACTIONS: ADD & EDIT =====

// Title and Subtitle double click to edit
document.getElementById('eventTitle').addEventListener('click', () => editEventInfo('eventTitle', 'Título do Evento'));
document.getElementById('eventSubtitle').addEventListener('click', () => editEventInfo('eventSubtitle', 'Subtítulo do Evento'));

function editEventInfo(key, label) {
    const currentValue = appData[key];
    const newValue = prompt(`Editar ${label}:`, currentValue);
    if (newValue !== null && newValue.trim() !== '') {
        appData[key] = newValue.trim();
        saveData();
        renderAll();
        showToast('Informações gerais salvas com sucesso!');
    }
}

// Global button listner for Add
document.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.dataset.section;
        activeSection = section;
        activeItemIndex = null;
        
        if (section === 'coletivos') {
            openColetivoForm();
        } else if (section === 'suites') {
            openSuiteForm();
        }
    });
});

function openColetivoForm(data = null) {
    const isEdit = data !== null;
    const title = isEdit ? `Editar Quarto Coletivo: ${data.id}` : 'Adicionar Quarto Coletivo';
    
    const html = `
        <div class="form-grid">
            <div class="form-group">
                <label class="form-label">Identificação / ID</label>
                <input type="text" id="formId" class="form-input" placeholder="Ex: Q12" value="${data ? data.id : ''}" ${isEdit ? 'disabled' : ''} required>
            </div>
            <div class="form-group">
                <label class="form-label">Nome do Quarto</label>
                <input type="text" id="formName" class="form-input" placeholder="Ex: Quarto 12" value="${data ? data.name : ''}" required>
            </div>
            <div class="form-group">
                <label class="form-label">Total de Camas</label>
                <input type="number" id="formBeds" class="form-input" placeholder="Ex: 20" value="${data ? data.beds : ''}" required>
            </div>
            <div class="form-group">
                <label class="form-label">Tipo de Cama</label>
                <input type="text" id="formBedType" class="form-input" placeholder="Ex: 10 beliches" value="${data ? data.bedType : ''}" required>
            </div>
            <div class="form-group">
                <label class="form-label">Chuveiros</label>
                <input type="number" id="formShowers" class="form-input" placeholder="0" value="${data ? data.showers : '0'}">
            </div>
            <div class="form-group">
                <label class="form-label">Vasos Sanitários</label>
                <input type="number" id="formToilets" class="form-input" placeholder="0" value="${data ? data.toilets : '0'}">
            </div>
            <div class="form-group">
                <label class="form-label">Pias</label>
                <input type="number" id="formSinks" class="form-input" placeholder="0" value="${data ? data.sinks : '0'}">
            </div>
            <div class="form-group">
                <label class="form-label">Acesso / Acessibilidade</label>
                <select id="formAccess" class="form-select">
                    <option value="accessible" ${data && data.access === 'accessible' ? 'selected' : ''}>Térreo / Acessível</option>
                    <option value="stairs-small" ${data && data.access === 'stairs-small' ? 'selected' : ''}>Lance Curto de Escadas</option>
                    <option value="stairs" ${data && data.access === 'stairs' ? 'selected' : ''}>Requer Escada Principal</option>
                </select>
            </div>
            <div class="form-group full">
                <label class="form-label">Público Recomendado (Selecione)</label>
                <div class="form-tags">
                    <button type="button" class="form-tag ${data && data.tags.includes('leadership') ? 'selected' : ''}" data-tag="leadership">Liderança</button>
                    <button type="button" class="form-tag ${data && data.tags.includes('kitchen') ? 'selected' : ''}" data-tag="kitchen">Cozinha</button>
                    <button type="button" class="form-tag ${data && data.tags.includes('youth') ? 'selected' : ''}" data-tag="youth">Jovens</button>
                    <button type="button" class="form-tag ${data && data.tags.includes('general') ? 'selected' : ''}" data-tag="general">Geral</button>
                </div>
            </div>
            <div class="form-group full">
                <label class="form-label">Observações Especiais</label>
                <input type="text" id="formNote" class="form-input" placeholder="Ex: Banheiro interno completo" value="${data ? data.note : ''}">
            </div>
        </div>
    `;
    
    openModal(title, html);
}

function openSuiteForm(data = null) {
    const isEdit = data !== null;
    const title = isEdit ? `Editar Acomodação Privada: ${data.id}` : 'Adicionar Acomodação Privada';
    
    const html = `
        <div class="form-grid">
            <div class="form-group">
                <label class="form-label">Identificação / ID</label>
                <input type="text" id="formId" class="form-input" placeholder="Ex: S10" value="${data ? data.id : ''}" ${isEdit ? 'disabled' : ''} required>
            </div>
            <div class="form-group">
                <label class="form-label">Nome</label>
                <input type="text" id="formName" class="form-input" placeholder="Ex: Suíte 10" value="${data ? data.name : ''}" required>
            </div>
            <div class="form-group">
                <label class="form-label">Capacidade de Camas</label>
                <input type="number" id="formBeds" class="form-input" placeholder="Ex: 3" value="${data ? data.beds : ''}" required>
            </div>
            <div class="form-group">
                <label class="form-label">Tipo de Cama</label>
                <input type="text" id="formBedType" class="form-input" placeholder="Ex: 1 casal + 1 solteiro" value="${data ? data.bedType : ''}" required>
            </div>
            <div class="form-group">
                <label class="form-label">Localização / Bloco</label>
                <select id="formSubSection" class="form-select">
                    <option value="suitesEscada" ${activeItemSub === 'suitesEscada' || (data && activeItemSub === null && appData.suitesEscada.some(x=>x.id===data.id)) ? 'selected' : ''}>Suítes com Escada</option>
                    <option value="suitesPequena" ${activeItemSub === 'suitesPequena' || (data && activeItemSub === null && appData.suitesPequena.some(x=>x.id===data.id)) ? 'selected' : ''}>Suítes com Pequeno Lance</option>
                    <option value="casinha" ${activeItemSub === 'casinha' || (data && activeItemSub === null && appData.casinha.some(x=>x.id===data.id)) ? 'selected' : ''}>Casinha Central</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Banheiro</label>
                <select id="formBath" class="form-select">
                    <option value="private" ${data && data.bath === 'private' ? 'selected' : ''}>Banheiro Privativo</option>
                    <option value="shared" ${data && data.bath === 'shared' ? 'selected' : ''}>Compartilhado</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Acesso / Acessibilidade</label>
                <select id="formAccess" class="form-select">
                    <option value="accessible" ${data && data.access === 'accessible' ? 'selected' : ''}>Térreo / Acessível</option>
                    <option value="stairs-small" ${data && data.access === 'stairs-small' ? 'selected' : ''}>Lance Curto de Escadas</option>
                    <option value="stairs" ${data && data.access === 'stairs' ? 'selected' : ''}>Requer Escada Principal</option>
                </select>
            </div>
            <div class="form-group full">
                <label class="form-label">Público Recomendado (Selecione)</label>
                <div class="form-tags">
                    <button type="button" class="form-tag ${data && data.tags.includes('leadership') ? 'selected' : ''}" data-tag="leadership">Liderança</button>
                    <button type="button" class="form-tag ${data && data.tags.includes('kitchen') ? 'selected' : ''}" data-tag="kitchen">Cozinha</button>
                    <button type="button" class="form-tag ${data && data.tags.includes('youth') ? 'selected' : ''}" data-tag="youth">Jovens</button>
                    <button type="button" class="form-tag ${data && data.tags.includes('general') ? 'selected' : ''}" data-tag="general">Geral</button>
                </div>
            </div>
        </div>
    `;
    
    openModal(title, html);
}

function saveModalData() {
    const selectedTags = Array.from(document.querySelectorAll('.form-tag.selected')).map(btn => btn.dataset.tag);
    const tagLabels = selectedTags.map(t => TAG_LABELS[t]);
    
    const idInput = document.getElementById('formId');
    if (!idInput) return;
    
    const id = idInput.value.trim().toUpperCase();
    const name = document.getElementById('formName').value.trim();
    const beds = parseInt(document.getElementById('formBeds').value) || 0;
    const bedType = document.getElementById('formBedType').value.trim();
    const access = document.getElementById('formAccess').value;
    
    if (!id || !name || !bedType) {
        showToast('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
    }

    if (activeSection === 'coletivos') {
        const showers = parseInt(document.getElementById('formShowers').value) || 0;
        const toilets = parseInt(document.getElementById('formToilets').value) || 0;
        const sinks = parseInt(document.getElementById('formSinks').value) || 0;
        const note = document.getElementById('formNote').value.trim();
        
        const itemData = {
            id, name, beds, bedType, showers, toilets, sinks, access, accessLabel: ACCESS_LABELS[access],
            tags: selectedTags, tagLabels, note
        };

        if (activeItemIndex === null) {
            // Check duplicated ID
            if (appData.coletivos.some(x => x.id === id)) {
                showToast(`Já existe um quarto com o ID ${id}`, 'error');
                return;
            }
            appData.coletivos.push(itemData);
            showToast('Quarto coletivo adicionado!');
        } else {
            appData.coletivos[activeItemIndex] = itemData;
            showToast('Quarto coletivo atualizado!');
        }
        
    } else if (activeSection === 'suites') {
        const subSection = document.getElementById('formSubSection').value;
        const bath = document.getElementById('formBath').value;
        
        const itemData = {
            id, name, beds, bedType, bath, bathLabel: bath === 'private' ? 'Privativo' : 'Compartilhado',
            access, accessLabel: ACCESS_LABELS[access], tags: selectedTags, tagLabels
        };

        // If editing
        if (activeItemIndex !== null) {
            // Remove from original sub-section
            appData[activeItemSub].splice(activeItemIndex, 1);
        } else {
            // Check duplication
            const allSuites = [...appData.suitesEscada, ...appData.suitesPequena, ...appData.casinha];
            if (allSuites.some(x => x.id === id)) {
                showToast(`Já existe uma acomodação com o ID ${id}`, 'error');
                return;
            }
        }
        
        // Push into new/target sub-section
        appData[subSection].push(itemData);
        showToast('Acomodação privada salva com sucesso!');
    }

    saveData();
    renderAll();
    closeModal();
}

window.editItem = function(section, index, subSection = null) {
    activeSection = section;
    activeItemIndex = index;
    activeItemSub = subSection;

    if (section === 'coletivos') {
        openColetivoForm(appData.coletivos[index]);
    } else if (section === 'suites') {
        openSuiteForm(appData[subSection][index]);
    }
};

window.deleteItem = function(section, index, subSection = null) {
    const list = section === 'coletivos' ? appData.coletivos : appData[subSection];
    const name = list[index].name;
    
    showConfirm(`Deseja realmente excluir "${name}"?`, () => {
        list.splice(index, 1);
        saveData();
        renderAll();
        showToast(`"${name}" foi removido.`);
    });
};

// ===== NOTE CRUD =====
let activeNoteIndex = null;

window.addNote = function() {
    activeNoteIndex = null;
    const title = 'Adicionar Observação';
    const html = `
        <div class="form-grid">
            <div class="form-group full">
                <label class="form-label">Título</label>
                <input type="text" id="noteTitle" class="form-input" placeholder="Ex: Informação sobre chuveiros" required>
            </div>
            <div class="form-group">
                <label class="form-label">Emoji</label>
                <input type="text" id="noteEmoji" class="form-input" placeholder="Ex: 💡" value="💡">
            </div>
            <div class="form-group">
                <label class="form-label">Tipo de Alerta</label>
                <select id="noteType" class="form-select">
                    <option value="info">Informação (Azul)</option>
                    <option value="warning">Alerta (Laranja)</option>
                    <option value="success">Sucesso (Verde)</option>
                </select>
            </div>
            <div class="form-group full">
                <label class="form-label">Conteúdo da Observação</label>
                <textarea id="noteContent" class="form-input" style="height: 100px; resize: vertical;" placeholder="Escreva a mensagem aqui..." required></textarea>
            </div>
        </div>
    `;
    
    openModal(title, html);
    document.getElementById('modalSave').onclick = saveNoteData;
};

window.editNote = function(index) {
    activeNoteIndex = index;
    const note = appData.notes[index];
    const title = 'Editar Observação';
    const html = `
        <div class="form-grid">
            <div class="form-group full">
                <label class="form-label">Título</label>
                <input type="text" id="noteTitle" class="form-input" value="${note.title}" required>
            </div>
            <div class="form-group">
                <label class="form-label">Emoji</label>
                <input type="text" id="noteEmoji" class="form-input" value="${note.emoji}">
            </div>
            <div class="form-group">
                <label class="form-label">Tipo de Alerta</label>
                <select id="noteType" class="form-select">
                    <option value="info" ${note.type === 'info' ? 'selected' : ''}>Informação (Azul)</option>
                    <option value="warning" ${note.type === 'warning' ? 'selected' : ''}>Alerta (Laranja)</option>
                    <option value="success" ${note.type === 'success' ? 'selected' : ''}>Sucesso (Verde)</option>
                </select>
            </div>
            <div class="form-group full">
                <label class="form-label">Conteúdo da Observação</label>
                <textarea id="noteContent" class="form-input" style="height: 100px; resize: vertical;" required>${note.content}</textarea>
            </div>
        </div>
    `;
    
    openModal(title, html);
    document.getElementById('modalSave').onclick = saveNoteData;
};

function saveNoteData() {
    const title = document.getElementById('noteTitle').value.trim();
    const emoji = document.getElementById('noteEmoji').value.trim();
    const type = document.getElementById('noteType').value;
    const content = document.getElementById('noteContent').value.trim();
    
    if (!title || !content) {
        showToast('Preencha o título e a observação.', 'error');
        return;
    }

    const noteData = { id: activeNoteIndex !== null ? appData.notes[activeNoteIndex].id : 'N' + Date.now(), title, emoji, type, content };

    if (activeNoteIndex === null) {
        appData.notes.push(noteData);
        showToast('Observação adicionada!');
    } else {
        appData.notes[activeNoteIndex] = noteData;
        showToast('Observação atualizada!');
    }

    saveData();
    renderAll();
    closeModal();
    // Restore default save handler
    document.getElementById('modalSave').onclick = saveModalData;
}

window.deleteNote = function(index) {
    showConfirm('Excluir esta observação?', () => {
        appData.notes.splice(index, 1);
        saveData();
        renderAll();
        showToast('Observação removida.');
    });
};

// ===== FILTERS =====
function setupFilters() {
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentFilter = chip.dataset.filter;
            applyFilter(currentFilter);
        });
    });
}

function applyFilter(filter) {
    const rows = document.querySelectorAll('.data-table tbody tr');
    rows.forEach(row => {
        const tags = row.dataset.tags || '';
        if (filter === 'all' || tags.split(',').includes(filter)) {
            row.classList.remove('filtered-out');
            row.querySelectorAll('.tag').forEach(tag => {
                if (tag.classList.contains(filter)) {
                    tag.classList.add('highlight');
                } else {
                    tag.classList.remove('highlight');
                }
            });
        } else {
            row.classList.add('filtered-out');
        }
    });

    const recCards = document.querySelectorAll('.rec-card');
    recCards.forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.filter === filter) ? '' : 'none';
    });
}

// ===== IMPORT & EXPORT =====
document.getElementById('btnExport').addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appData, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `quadro_acomodacoes_${appData.eventTitle.toLowerCase().replace(/\s+/g, '_')}.json`);
    dlAnchorElem.click();
    showToast('Dados exportados com sucesso!');
});

document.getElementById('btnExportCSV').addEventListener('click', () => {
    // CSV Header (Portuguese Excel friendly with Semicolon separator)
    const headers = [
        'Seção',
        'ID',
        'Nome',
        'Total de Camas',
        'Tipo de Cama',
        'Banheiro',
        'Chuveiros',
        'Vasos Sanitários',
        'Pias',
        'Acesso / Escadas',
        'Público Recomendado',
        'Observações / Notas'
    ];

    let csvRows = [headers.join(';')];

    // Helper to sanitize text for CSV cell
    const escapeCSV = (val) => {
        if (val === undefined || val === null) return '';
        let str = String(val).replace(/"/g, '""'); // escape double quotes
        if (str.includes(';') || str.includes('\n') || str.includes('"')) {
            str = `"${str}"`;
        }
        return str;
    };

    // 1. Quartos Coletivos
    appData.coletivos.forEach(room => {
        const row = [
            'Quartos Coletivos',
            room.id,
            room.name,
            room.beds,
            room.bedType,
            'Interno',
            room.showers,
            room.toilets,
            room.sinks,
            ACCESS_LABELS[room.access] || room.access,
            room.tags.map(t => TAG_LABELS[t]).join(', '),
            room.note || ''
        ];
        csvRows.push(row.map(escapeCSV).join(';'));
    });

    // 2. Suítes com Escada
    appData.suitesEscada.forEach(suite => {
        const row = [
            'Suítes com Escada',
            suite.id,
            suite.name,
            suite.beds,
            suite.bedType,
            suite.bath === 'private' ? 'Privativo' : 'Compartilhado',
            1, // Chuveiro padrão
            1, // Vaso padrão
            1, // Pia padrão
            ACCESS_LABELS[suite.access] || suite.access,
            suite.tags.map(t => TAG_LABELS[t]).join(', '),
            'Localizada no andar superior'
        ];
        csvRows.push(row.map(escapeCSV).join(';'));
    });

    // 3. Suítes com Pequeno Lance
    appData.suitesPequena.forEach(suite => {
        const row = [
            'Suítes com Pequeno Lance',
            suite.id,
            suite.name,
            suite.beds,
            suite.bedType,
            suite.bath === 'private' ? 'Privativo' : 'Compartilhado',
            1,
            1,
            1,
            ACCESS_LABELS[suite.access] || suite.access,
            suite.tags.map(t => TAG_LABELS[t]).join(', '),
            'Acesso facilitado por poucos degraus'
        ];
        csvRows.push(row.map(escapeCSV).join(';'));
    });

    // 4. Casinha Central
    appData.casinha.forEach(room => {
        const row = [
            'Casinha Central',
            room.id,
            room.name,
            room.beds,
            room.bedType,
            room.bath === 'private' ? 'Privativo' : 'Compartilhado (Externo à casinha)',
            0,
            0,
            0,
            ACCESS_LABELS[room.access] || room.access,
            room.tags.map(t => TAG_LABELS[t]).join(', '),
            'Banheiro compartilhado da casinha'
        ];
        csvRows.push(row.map(escapeCSV).join(';'));
    });

    // UTF-8 BOM to ensure Excel reads accents correctly
    const csvContent = '\uFEFF' + csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    
    const url = URL.createObjectURL(blob);
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", url);
    dlAnchorElem.setAttribute("download", `planilha_acomodacoes_${appData.eventTitle.toLowerCase().replace(/\s+/g, '_')}.csv`);
    dlAnchorElem.click();
    
    URL.revokeObjectURL(url);
    showToast('Planilha exportada com sucesso!');
});

document.getElementById('btnImport').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(evt) {
        try {
            const imported = JSON.parse(evt.target.result);
            if (imported.coletivos && (imported.suitesEscada || imported.suitesPequena || imported.casinha)) {
                appData = imported;
                saveData();
                renderAll();
                showToast('Dados importados com sucesso!');
            } else {
                showToast('Arquivo JSON inválido ou incompatível.', 'error');
            }
        } catch (err) {
            showToast('Erro ao ler arquivo JSON.', 'error');
        }
    };
    reader.readAsText(file);
});

document.getElementById('btnReset').addEventListener('click', () => {
    showConfirm('Deseja realmente restaurar os dados originais? Todas as suas alterações serão perdidas.', () => {
        appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
        saveData();
        renderAll();
        showToast('Dados restaurados para o padrão original.', 'info');
    });
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    renderAll();
    setupFilters();
    
    // Set current date in footer
    const now = new Date();
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    document.getElementById('footerDate').textContent = `${months[now.getMonth()]} de ${now.getFullYear()}`;
});
