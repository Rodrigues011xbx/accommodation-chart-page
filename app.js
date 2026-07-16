// ===== DATA =====
const DATA = {
    coletivos: [
        {
            id: 'Q01', name: 'Quarto 01', beds: 20,
            bedType: '4 beliches (sup. + inf.) + 4 camas avulsas',
            showers: 3, toilets: 2, sinks: 1,
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['youth', 'general'],
            tagLabels: ['Jovens / Adultos', 'Público Geral'],
            note: 'Banheiro interno'
        },
        {
            id: 'Q02', name: 'Quarto 02', beds: 20,
            bedType: '4 beliches (sup. + inf.) + 4 camas avulsas',
            showers: 3, toilets: 2, sinks: 1,
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['youth', 'general'],
            tagLabels: ['Jovens / Adultos', 'Público Geral'],
            note: 'Banheiro interno'
        },
        {
            id: 'Q03', name: 'Quarto 03', beds: 20,
            bedType: '4 beliches (sup. + inf.) + 4 camas avulsas',
            showers: 3, toilets: 2, sinks: 1,
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['youth', 'general'],
            tagLabels: ['Jovens / Adultos', 'Público Geral'],
            note: 'Banheiro interno'
        },
        {
            id: 'Q04', name: 'Quarto 04', beds: 20,
            bedType: '4 beliches (sup. + inf.) + 4 camas avulsas',
            showers: 3, toilets: 2, sinks: 1,
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['youth', 'general'],
            tagLabels: ['Jovens / Adultos', 'Público Geral'],
            note: 'Banheiro interno'
        },
        {
            id: 'Q05', name: 'Quarto 05', beds: 20,
            bedType: '4 beliches (sup. + inf.) + 4 camas avulsas',
            showers: 3, toilets: 2, sinks: 1,
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['elderly', 'family'],
            tagLabels: ['Idosos (camas inferiores)', 'Famílias'],
            note: 'Priorizar camas inferiores para idosos'
        },
        {
            id: 'Q06', name: 'Quarto 06', beds: 20,
            bedType: '4 beliches (sup. + inf.) + 4 camas avulsas',
            showers: 3, toilets: 2, sinks: 1,
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['elderly', 'family'],
            tagLabels: ['Idosos (camas inferiores)', 'Famílias'],
            note: 'Priorizar camas inferiores para idosos'
        },
        {
            id: 'Q07', name: 'Quarto 07', beds: 20,
            bedType: '4 beliches (sup. + inf.) + 4 camas avulsas',
            showers: 3, toilets: 2, sinks: 1,
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['youth', 'general'],
            tagLabels: ['Jovens / Adultos', 'Público Geral'],
            note: 'Banheiro interno'
        },
        {
            id: 'Q08', name: 'Quarto 08', beds: 20,
            bedType: '4 beliches (sup. + inf.) + 4 camas avulsas',
            showers: 3, toilets: 2, sinks: 1,
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['youth', 'general'],
            tagLabels: ['Jovens / Adultos', 'Público Geral'],
            note: 'Banheiro interno'
        },
        {
            id: 'Q09', name: 'Quarto 09', beds: 22,
            bedType: '22 camas (misto)',
            showers: 4, toilets: 4, sinks: 1,
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['elderly', 'family'],
            tagLabels: ['Idosos / Mob. Reduzida', 'Famílias c/ crianças'],
            note: 'Maior qtd. de banheiros — ideal para quem precisa de mais acessibilidade sanitária'
        },
        {
            id: 'Q10', name: 'Quarto 10', beds: 12,
            bedType: '6 beliches (sup. + inf.)',
            showers: 1, toilets: 1, sinks: 0,
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['youth'],
            tagLabels: ['Jovens / Adultos'],
            note: 'Banheiro limitado (1 vaso, 1 chuveiro). Sem pia no banheiro interno.'
        },
        {
            id: 'Q11', name: 'Quarto 11', beds: 20,
            bedType: '10 beliches (sup. + inf.)',
            showers: 1, toilets: 1, sinks: 0,
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['youth'],
            tagLabels: ['Jovens / Adultos'],
            note: 'Banheiro limitado (1 vaso, ~1 chuveiro). Sem pia no banheiro interno.'
        }
    ],

    suitesEscada: [
        {
            id: 'S01', name: 'Suíte 01', beds: 2,
            bedType: '1 cama casal + 1 solteiro',
            bath: 'private', bathLabel: 'Privativo (com chuveiro)',
            access: 'stairs', accessLabel: 'Escada',
            tags: ['couple', 'family'],
            tagLabels: ['Casais', 'Família pequena']
        },
        {
            id: 'S02', name: 'Suíte 02', beds: 2,
            bedType: '1 cama casal + 1 solteiro',
            bath: 'private', bathLabel: 'Privativo (com chuveiro)',
            access: 'stairs', accessLabel: 'Escada',
            tags: ['couple', 'family'],
            tagLabels: ['Casais', 'Família pequena']
        },
        {
            id: 'S03', name: 'Suíte 03', beds: 2,
            bedType: '1 cama casal + 1 solteiro',
            bath: 'private', bathLabel: 'Privativo (com chuveiro)',
            access: 'stairs', accessLabel: 'Escada',
            tags: ['couple', 'family'],
            tagLabels: ['Casais', 'Família pequena']
        },
        {
            id: 'S04', name: 'Suíte 04', beds: 2,
            bedType: '1 cama casal + 1 solteiro',
            bath: 'private', bathLabel: 'Privativo (com chuveiro)',
            access: 'stairs', accessLabel: 'Escada',
            tags: ['couple', 'family'],
            tagLabels: ['Casais', 'Família pequena']
        },
        {
            id: 'S05', name: 'Suíte 05', beds: 1,
            bedType: '1 cama casal',
            bath: 'private', bathLabel: 'Privativo (com chuveiro)',
            access: 'stairs', accessLabel: 'Escada',
            tags: ['couple'],
            tagLabels: ['Casais']
        },
        {
            id: 'S06', name: 'Suíte 06', beds: 3,
            bedType: '1 cama casal + 2 solteiro',
            bath: 'private', bathLabel: 'Privativo (com chuveiro)',
            access: 'stairs', accessLabel: 'Escada',
            tags: ['family'],
            tagLabels: ['Família c/ crianças']
        }
    ],

    suitesPequena: [
        {
            id: 'S07', name: 'Suíte 07', beds: 3,
            bedType: '1 cama casal + 2 solteiro',
            bath: 'private', bathLabel: 'Privativo (com chuveiro)',
            access: 'stairs-small', accessLabel: 'Pequeno lance',
            tags: ['elderly', 'family'],
            tagLabels: ['Idosos (se possível)', 'Família c/ crianças']
        },
        {
            id: 'S08', name: 'Suíte 08', beds: 3,
            bedType: '1 cama casal + 2 solteiro',
            bath: 'private', bathLabel: 'Privativo (com chuveiro)',
            access: 'stairs-small', accessLabel: 'Pequeno lance',
            tags: ['elderly', 'family'],
            tagLabels: ['Idosos (se possível)', 'Família c/ crianças']
        },
        {
            id: 'S09', name: 'Suíte 09', beds: 1,
            bedType: '1 cama casal',
            bath: 'private', bathLabel: 'Privativo (com chuveiro)',
            access: 'stairs-small', accessLabel: 'Pequeno lance',
            tags: ['elderly', 'couple'],
            tagLabels: ['Idosos (casal)', 'Casais']
        }
    ],

    casinha: [
        {
            id: 'CC1', name: 'Quarto Central 1', beds: '~2–3',
            bedType: 'A confirmar',
            bath: 'shared', bathLabel: 'Compartilhado (1 na casinha)',
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['youth', 'general'],
            tagLabels: ['Jovens / Adultos', 'Público Geral']
        },
        {
            id: 'CC2', name: 'Quarto Central 2', beds: '~2–3',
            bedType: 'A confirmar',
            bath: 'shared', bathLabel: 'Compartilhado (1 na casinha)',
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['youth', 'general'],
            tagLabels: ['Jovens / Adultos', 'Público Geral']
        },
        {
            id: 'CC3', name: 'Quarto Central 3', beds: '~2–3',
            bedType: 'A confirmar',
            bath: 'shared', bathLabel: 'Compartilhado (1 na casinha)',
            access: 'accessible', accessLabel: 'Térreo',
            tags: ['youth', 'general'],
            tagLabels: ['Jovens / Adultos', 'Público Geral']
        }
    ]
};

const RECOMMENDATIONS = [
    {
        emoji: '👴',
        title: 'Idosos / Mobilidade Reduzida',
        description: 'Priorizar <strong>Quartos 05, 06 e 09</strong> (coletivos no térreo com camas inferiores). O Quarto 09 é ideal por ter 4 chuveiros e 4 vasos. As <strong>Suítes 07, 08 e 09</strong> (pequeno lance de escadas) também podem servir, caso consigam subir um lance curto. Evitar beliches superiores e locais com escadas longas.',
        rooms: ['Q05', 'Q06', 'Q09', 'S07', 'S08', 'S09'],
        filter: 'elderly'
    },
    {
        emoji: '👶',
        title: 'Famílias com Crianças de Colo',
        description: 'Recomenda-se as <strong>Suítes</strong> pelo banheiro privativo e privacidade. Para famílias maiores, <strong>Suíte 06</strong> (1 casal + 2 solteiros) ou <strong>Suítes 07/08</strong>. Nos coletivos, <strong>Quartos 05, 06 e 09</strong> são melhores por ter camas ao nível do chão e boa infraestrutura sanitária.',
        rooms: ['S01–S04', 'S06', 'S07', 'S08', 'Q05', 'Q06', 'Q09'],
        filter: 'family'
    },
    {
        emoji: '💑',
        title: 'Casais',
        description: 'As <strong>9 suítes</strong> são ideais para casais, todas com cama de casal e banheiro privativo. A <strong>Suíte 05</strong> e <strong>Suíte 09</strong> são exclusivas (apenas cama de casal). As suítes 01–04 podem acomodar casais com 1 filho (cama de solteiro extra).',
        rooms: ['S01–S09'],
        filter: 'couple'
    },
    {
        emoji: '🧑‍🤝‍🧑',
        title: 'Jovens / Adultos sem Restrições',
        description: 'Podem ser alocados em qualquer <strong>quarto coletivo</strong>. Os quartos 01–04 e 07–08 são ideais por ter boa proporção de banheiros (3 chuveiros, 2 vasos cada). Os quartos 10 e 11 têm banheiro mais limitado mas funcionam bem para jovens. Beliches superiores disponíveis.',
        rooms: ['Q01–Q08', 'Q10', 'Q11', 'CC1–CC3'],
        filter: 'youth'
    }
];

// ===== DOM RENDERING =====

function createTags(tags, labels) {
    return tags.map((tag, i) => 
        `<span class="tag ${tag}">${labels[i]}</span>`
    ).join('');
}

function createAccessBadge(access, label) {
    return `<span class="access-badge ${access}">${label}</span>`;
}

function createBathBadge(bath, label) {
    return `<span class="bath-badge ${bath}">${label}</span>`;
}

function renderColetivos() {
    const tbody = document.getElementById('tbodyColetivos');
    tbody.innerHTML = DATA.coletivos.map(room => `
        <tr data-tags="${room.tags.join(',')}" data-id="${room.id}">
            <td class="cell-room">${room.name}</td>
            <td class="cell-beds">${room.beds}</td>
            <td class="cell-type">${room.bedType}</td>
            <td><span class="cell-facility"><span class="cell-facility-icon">🚿</span> ${room.showers}</span></td>
            <td><span class="cell-facility"><span class="cell-facility-icon">🚽</span> ${room.toilets}</span></td>
            <td><span class="cell-facility"><span class="cell-facility-icon">🧼</span> ${room.sinks || '—'}</span></td>
            <td>${createAccessBadge(room.access, room.accessLabel)}</td>
            <td><div class="tags-container">${createTags(room.tags, room.tagLabels)}</div></td>
        </tr>
    `).join('');
}

function renderSuites(data, tbodyId) {
    const tbody = document.getElementById(tbodyId);
    tbody.innerHTML = data.map(suite => `
        <tr data-tags="${suite.tags.join(',')}" data-id="${suite.id}">
            <td class="cell-room">${suite.name}</td>
            <td class="cell-beds">${suite.beds}</td>
            <td class="cell-type">${suite.bedType}</td>
            <td>${createBathBadge(suite.bath, suite.bathLabel)}</td>
            <td>${createAccessBadge(suite.access, suite.accessLabel)}</td>
            <td><div class="tags-container">${createTags(suite.tags, suite.tagLabels)}</div></td>
        </tr>
    `).join('');
}

function renderRecommendations() {
    const grid = document.getElementById('recommendationsGrid');
    grid.innerHTML = RECOMMENDATIONS.map(rec => `
        <div class="rec-card" data-filter="${rec.filter}">
            <div class="rec-card-header">
                <span class="rec-emoji">${rec.emoji}</span>
                <h4>${rec.title}</h4>
            </div>
            <p>${rec.description}</p>
            <div class="rec-rooms">
                ${rec.rooms.map(r => `<span class="rec-room-tag">${r}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// ===== STATS ANIMATION =====

function animateValue(element, start, end, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + (end - start) * eased);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

function animateStats() {
    const totalBeds = DATA.coletivos.reduce((sum, r) => sum + r.beds, 0);
    const suiteBeds = [...DATA.suitesEscada, ...DATA.suitesPequena].reduce((sum, r) => sum + r.beds, 0);
    const casinhaBeds = 8; // Estimate ~2-3 per room * 3 rooms
    const totalAll = totalBeds + suiteBeds + casinhaBeds;
    
    const totalRooms = DATA.coletivos.length + DATA.suitesEscada.length + DATA.suitesPequena.length + DATA.casinha.length;

    setTimeout(() => {
        animateValue(document.getElementById('totalBeds'), 0, totalAll, 1200);
        animateValue(document.getElementById('totalRooms'), 0, totalRooms, 1000);
        animateValue(document.getElementById('totalCapacity'), 0, totalAll, 1400);
    }, 300);
}

// ===== FILTER SYSTEM =====

function setupFilters() {
    const chips = document.querySelectorAll('.chip');
    
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            // Update active state
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            
            const filter = chip.dataset.filter;
            applyFilter(filter);
        });
    });
}

function applyFilter(filter) {
    const allRows = document.querySelectorAll('.data-table tbody tr');
    
    allRows.forEach(row => {
        if (filter === 'all') {
            row.classList.remove('filtered-out');
            return;
        }
        
        const tags = row.dataset.tags || '';
        if (tags.includes(filter)) {
            row.classList.remove('filtered-out');
            // Highlight matching tags
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

    // Also filter recommendations
    const recCards = document.querySelectorAll('.rec-card');
    recCards.forEach(card => {
        if (filter === 'all') {
            card.style.display = '';
            return;
        }
        card.style.display = card.dataset.filter === filter ? '' : 'none';
    });

    // Remove highlights if showing all
    if (filter === 'all') {
        document.querySelectorAll('.tag.highlight').forEach(tag => {
            tag.classList.remove('highlight');
        });
    }
}

// ===== BACKGROUND PARTICLES =====

function createParticles() {
    const container = document.getElementById('bgParticles');
    const colors = ['rgba(99,102,241,0.15)', 'rgba(139,92,246,0.12)', 'rgba(6,182,212,0.1)', 'rgba(236,72,153,0.08)'];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 4 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const duration = Math.random() * 15 + 15;
        const delay = Math.random() * 20;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            left: ${left}%;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
            box-shadow: 0 0 ${size * 3}px ${color};
        `;
        
        container.appendChild(particle);
    }
}

// ===== SCROLL ANIMATIONS =====

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.section, .rec-card, .note-card').forEach(el => {
        observer.observe(el);
    });
}

// ===== TOOLTIP SYSTEM =====

function addRowTooltips() {
    const rows = document.querySelectorAll('#tbodyColetivos tr');
    rows.forEach((row, index) => {
        const room = DATA.coletivos[index];
        if (room && room.note) {
            row.title = room.note;
            row.style.cursor = 'help';
        }
    });
}

// ===== INIT =====

document.addEventListener('DOMContentLoaded', () => {
    // Render all tables
    renderColetivos();
    renderSuites(DATA.suitesEscada, 'tbodySuitesEscada');
    renderSuites(DATA.suitesPequena, 'tbodySuitesPequena');
    renderSuites(DATA.casinha, 'tbodyCasinha');
    renderRecommendations();

    // Setup interactions
    setupFilters();
    addRowTooltips();

    // Animate
    animateStats();
    createParticles();
    setupScrollAnimations();
});
