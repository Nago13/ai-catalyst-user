// ========================================
// AI Recommendations Database
// ========================================
const aiRecommendations = {
    tecnologia: {
        recommended: {
            name: "Claude Pro",
            logo: "images/claude-logo.png?v=10",
            why: [
                "Análise profunda de código e documentação técnica",
                "Contexto de 200K tokens para projetos grandes",
                "Debugging inteligente e sugestões de otimização"
            ]
        },
        alternative: {
            name: "GitHub Copilot",
            logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
            desc: "Integração nativa com VS Code, autocomplete inteligente e geração de código em tempo real"
        },
        prompts: [
            "Sou desenvolvedor [linguagem]. Preciso revisar este código [cole o código] e sugerir melhorias de performance, segurança e boas práticas.",
            "Tenho este erro [cole o erro]. Analise o problema, explique a causa e sugira 3 soluções possíveis com exemplos de código."
        ]
    },
    marketing: {
        recommended: {
            name: "ChatGPT",
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
            why: [
                "Bom para: redigir e-mails, rascunhos, análise leve de dados",
                "Integra bem com Docs/Sheets/Word/Excel",
                "Aprendizado simples, resultados rápidos"
            ]
        },
        alternative: {
            name: "Jasper AI",
            logo: "https://www.jasper.ai/favicon.ico",
            desc: "Criação de conteúdo otimizado para conversão, com templates específicos para marketing"
        },
        prompts: [
            "Sou [sua área]. Preciso de um rascunho de e-mail para [objetivo], com tom [profissional/amigável] e 3 variações de assunto.",
            "Tenho esta lista de tarefas [cole o texto]. Agrupe por prioridade, estime tempo e sugira 3 automações simples."
        ]
    },
    financeiro: {
        recommended: {
            name: "Gemini",
            logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
            why: [
                "Bom custo para quem usa Google Workspace",
                "Leitura de documentos e planilhas com contexto",
                "Análise de dados financeiros integrada"
            ]
        },
        alternative: {
            name: "Microsoft Copilot",
            logo: "images/copilot-logo.jpg?v=4",
            desc: "Integração nativa com Excel, análise de planilhas e geração de relatórios financeiros"
        },
        prompts: [
            "Analise esta planilha financeira [cole dados ou descreva]. Identifique tendências, anomalias e sugira 3 insights principais.",
            "Preciso criar um relatório financeiro para [período]. Estruture com: resumo executivo, principais métricas, análise de variação e recomendações."
        ]
    },
    juridico: {
        recommended: {
            name: "Claude",
            logo: "images/claude-logo.png?v=10",
            why: [
                "Análise de contratos extensos com contexto de 200K tokens",
                "Pesquisa jurídica precisa e citações relevantes",
                "Redação legal clara e estruturada"
            ]
        },
        alternative: {
            name: "ChatGPT",
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
            desc: "Versatilidade para múltiplas tarefas jurídicas, revisão de documentos e resumos"
        },
        prompts: [
            "Sou advogado. Preciso revisar este contrato [cole ou descreva]. Identifique cláusulas problemáticas, riscos e sugira melhorias.",
            "Tenho este caso [descreva]. Faça uma pesquisa jurídica sobre precedentes similares e sugira argumentos principais com base na legislação."
        ]
    },
    rh: {
        recommended: {
            name: "ChatGPT",
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
            why: [
                "Bom para: redigir e-mails, rascunhos, análise leve de dados",
                "Integra bem com Docs/Sheets/Word/Excel",
                "Aprendizado simples, resultados rápidos"
            ]
        },
        alternative: {
            name: "Notion AI",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
            desc: "Gestão de documentação, criação de políticas e automação de processos de RH integrados"
        },
        prompts: [
            "Sou [sua área]. Preciso de um rascunho de e-mail para [objetivo], com tom [profissional/amigável] e 3 variações de assunto.",
            "Preciso criar uma política de [tema] para RH. Estruture com: objetivo, escopo, diretrizes principais e procedimentos."
        ]
    },
    operacoes: {
        recommended: {
            name: "Gemini",
            logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
            why: [
                "Bom custo para quem usa Google Workspace",
                "Leitura de documentos e planilhas com contexto",
                "Análise de dados operacionais integrada"
            ]
        },
        alternative: {
            name: "Microsoft Copilot",
            logo: "images/copilot-logo.jpg?v=4",
            desc: "Integração com Excel e Power BI, análise de dados operacionais e otimização de processos"
        },
        prompts: [
            "Tenho esta lista de tarefas [cole o texto]. Agrupe por prioridade, estime tempo e sugira 3 automações simples.",
            "Analise este processo operacional [descreva]. Identifique gargalos, sugira melhorias e estime ganho de eficiência."
        ]
    },
    design: {
        recommended: {
            name: "ChatGPT",
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
            why: [
                "Bom para: redigir briefings, descrições de projetos, análise de tendências",
                "Geração de ideias criativas e conceitos",
                "Aprendizado simples, resultados rápidos"
            ]
        },
        alternative: {
            name: "Canva AI",
            logo: "images/canva-logo.jpg?v=5",
            desc: "Geração de imagens e designs, integração com Canva e templates profissionais"
        },
        prompts: [
            "Sou designer. Preciso de um briefing criativo para [projeto]. Inclua: objetivo, público-alvo, referências visuais e direção de arte.",
            "Tenho este conceito [descreva]. Desenvolva 5 variações criativas com descrições detalhadas de cada uma."
        ]
    },
    produto: {
        recommended: {
            name: "Claude",
            logo: "images/claude-logo.png?v=10",
            why: [
                "Análise profunda de requisitos e documentação técnica",
                "Contexto longo para roadmaps e features complexas",
                "Estruturação clara de ideias e priorização"
            ]
        },
        alternative: {
            name: "ChatGPT",
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
            desc: "Versatilidade para múltiplas tarefas de produto, geração de ideias e documentação"
        },
        prompts: [
            "Sou product manager. Preciso estruturar esta feature [descreva]. Crie: user stories, requisitos funcionais, critérios de aceite e métricas de sucesso.",
            "Tenho este problema do usuário [descreva]. Sugira 3 soluções possíveis com prós/contras, esforço estimado e impacto."
        ]
    },
    outros: {
        recommended: {
            name: "ChatGPT",
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
            why: [
                "Bom para: redigir e-mails, rascunhos, análise leve de dados",
                "Integra bem com Docs/Sheets/Word/Excel",
                "Aprendizado simples, resultados rápidos"
            ]
        },
        alternative: {
            name: "Claude",
            logo: "images/claude-logo.png?v=10",
            desc: "Versatilidade para múltiplas tarefas, análise profunda e conversas contextuais longas"
        },
        prompts: [
            "Sou [sua área]. Preciso de um rascunho de e-mail para [objetivo], com tom [profissional/amigável] e 3 variações de assunto.",
            "Tenho esta lista de tarefas [cole o texto]. Agrupe por prioridade, estime tempo e sugira 3 automações simples."
        ]
    }
};

// ========================================
// Form State Management
// ========================================
let currentStep = 1;
const totalSteps = 4;

// Form data storage
const formData = {
    area: null,
    tarefas: null,
    usaIA: null
};

// ========================================
// Navigation Functions
// ========================================
function updateProgressBar() {
    const progressFill = document.getElementById('progressFill');
    const progressSteps = document.querySelectorAll('.progress-step');
    
    const percentage = (currentStep / totalSteps) * 100;
    progressFill.style.width = `${percentage}%`;
    
    progressSteps.forEach((step, index) => {
        const stepNum = index + 1;
        step.classList.remove('active', 'completed');
        
        if (stepNum < currentStep) {
            step.classList.add('completed');
        } else if (stepNum === currentStep) {
            step.classList.add('active');
        }
    });
}

function showStep(step) {
    const formSteps = document.querySelectorAll('.form-step');
    
    formSteps.forEach((formStep) => {
        formStep.classList.remove('active');
        if (parseInt(formStep.dataset.step) === step) {
            formStep.classList.add('active');
        }
    });
    
    currentStep = step;
    updateProgressBar();
}

function nextStep(currentStepNum) {
    // Validate current step
    if (!validateStep(currentStepNum)) {
        return;
    }
    
    // Save data
    saveStepData(currentStepNum);
    
    // Move to next step
    showStep(currentStepNum + 1);
    
    // Smooth scroll to form
    scrollToElement('.diagnostic-section');
}

function prevStep(currentStepNum) {
    showStep(currentStepNum - 1);
    scrollToElement('.diagnostic-section');
}

function validateStep(step) {
    if (step === 1) {
        const selectedArea = document.querySelector('input[name="area"]:checked');
        if (!selectedArea) {
            shakeElement('.options-grid');
            return false;
        }
    } else if (step === 2) {
        const tarefas = document.getElementById('tarefas').value.trim();
        if (!tarefas || tarefas.length < 10) {
            shakeElement('.textarea-container');
            return false;
        }
    } else if (step === 3) {
        const selectedUsaIA = document.querySelector('input[name="usaIA"]:checked');
        if (!selectedUsaIA) {
            shakeElement('.radio-options');
            return false;
        }
    }
    return true;
}

function saveStepData(step) {
    if (step === 1) {
        formData.area = document.querySelector('input[name="area"]:checked').value;
    } else if (step === 2) {
        formData.tarefas = document.getElementById('tarefas').value.trim();
    } else if (step === 3) {
        formData.usaIA = document.querySelector('input[name="usaIA"]:checked').value;
    }
}

// ========================================
// Results Functions
// ========================================
function showResults() {
    // Validate step 3
    if (!validateStep(3)) {
        return;
    }
    
    // Save step 3 data
    saveStepData(3);
    
    // Show loading overlay
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.classList.add('active');
    }
    
    // Hide current step
    const currentStep = document.querySelector('.form-step.active');
    if (currentStep) {
        currentStep.classList.remove('active');
    }
    
    // After 2 seconds, show results
    setTimeout(() => {
        // Generate recommendations
        const recommendation = aiRecommendations[formData.area] || aiRecommendations.outros;
        
        // Update results display
        const resultTaskEl = document.getElementById('resultTask');
        if (resultTaskEl) {
            resultTaskEl.textContent = `Para: ${truncateText(formData.tarefas, 80)}`;
        }
        
        // Recommended AI (main)
        const recommendedNameEl = document.getElementById('recommendedAIName');
        const recommendedLogoEl = document.getElementById('recommendedAILogo');
        if (recommendedNameEl) recommendedNameEl.textContent = recommendation.recommended.name;
        if (recommendedLogoEl) {
            recommendedLogoEl.innerHTML = `<img src="${recommendation.recommended.logo}" alt="${recommendation.recommended.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22><rect fill=%22%233b82f6%22 width=%2224%22 height=%2224%22 rx=%224%22/><text x=%2212%22 y=%2216%22 text-anchor=%22middle%22 fill=%22white%22 font-size=%2210%22>AI</text></svg>'">`;
        }
        
        // Why recommended
        if (recommendation.recommended.why) {
            const why1 = document.getElementById('why1');
            const why2 = document.getElementById('why2');
            const why3 = document.getElementById('why3');
            if (why1) why1.textContent = recommendation.recommended.why[0];
            if (why2) why2.textContent = recommendation.recommended.why[1];
            if (why3) why3.textContent = recommendation.recommended.why[2];
        }
        
        // Alternative AI
        const alternativeNameEl = document.getElementById('alternativeAIName');
        const alternativeDescEl = document.getElementById('alternativeAIDesc');
        const alternativeLogoEl = document.getElementById('alternativeAILogo');
        if (alternativeNameEl && recommendation.alternative) {
            alternativeNameEl.textContent = recommendation.alternative.name;
        }
        if (alternativeDescEl && recommendation.alternative) {
            alternativeDescEl.textContent = recommendation.alternative.desc;
        }
        if (alternativeLogoEl && recommendation.alternative) {
            alternativeLogoEl.innerHTML = `<img src="${recommendation.alternative.logo}" alt="${recommendation.alternative.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22><rect fill=%22%2306b6d4%22 width=%2224%22 height=%2224%22 rx=%224%22/><text x=%2212%22 y=%2216%22 text-anchor=%22middle%22 fill=%22white%22 font-size=%2210%22>AI</text></svg>'">`;
        }
        
        // Prompts
        if (recommendation.prompts) {
            const prompt1El = document.getElementById('prompt1');
            const prompt2El = document.getElementById('prompt2');
            if (prompt1El) {
                // Replace placeholders with actual data
                let prompt1 = recommendation.prompts[0];
                prompt1 = prompt1.replace('[sua área]', getAreaName(formData.area));
                prompt1El.textContent = prompt1;
            }
            if (prompt2El) {
                prompt2El.textContent = recommendation.prompts[1];
            }
        }
        
        // Pre-fill waitlist area
        const waitlistAreaEl = document.getElementById('waitlistArea');
        if (waitlistAreaEl) {
            waitlistAreaEl.value = getAreaName(formData.area);
        }
        
        // Hide loading overlay
        if (loadingOverlay) {
            loadingOverlay.classList.remove('active');
        }
        
        // Show results step
        showStep(4);
        scrollToElement('.diagnostic-section');
    }, 2000);
}

function getAreaName(areaKey) {
    const areaNames = {
        tecnologia: 'Tecnologia/TI',
        marketing: 'Marketing/Vendas',
        financeiro: 'Financeiro/Contábil',
        juridico: 'Jurídico',
        rh: 'RH/Pessoas',
        operacoes: 'Operações/Logística',
        design: 'Design/Criativo',
        produto: 'Produto/Inovação',
        outros: 'Outros'
    };
    return areaNames[areaKey] || 'Outros';
}

function copyPrompt(promptNum) {
    const promptEl = document.getElementById(`prompt${promptNum}`);
    if (!promptEl) return;
    
    const promptText = promptEl.textContent;
    
    // Copy to clipboard
    navigator.clipboard.writeText(promptText).then(() => {
        // Update button text
        const button = event.target.closest('.btn-copy-prompt');
        if (button) {
            const copyText = button.querySelector('.copy-text');
            if (copyText) {
                const originalText = copyText.textContent;
                copyText.textContent = 'Copiado!';
                button.classList.add('copied');
                
                setTimeout(() => {
                    copyText.textContent = originalText;
                    button.classList.remove('copied');
                }, 2000);
            }
        }
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

function submitWaitlist(event) {
    event.preventDefault();
    
    const email = document.getElementById('waitlistEmail').value.trim();
    const area = document.getElementById('waitlistArea').value.trim();
    const newsletter = document.getElementById('waitlistNewsletter').checked;
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        shakeElement('.waitlist-form');
        document.getElementById('waitlistEmail').focus();
        return;
    }
    
    // Store waitlist data (in real app, would send to server)
    const waitlistData = {
        email: email,
        area: area || formData.area || 'outros',
        newsletter: newsletter,
        timestamp: new Date().toISOString(),
        formData: formData
    };
    
    console.log('Waitlist submitted:', waitlistData);
    
    // Show success message
    const form = document.getElementById('waitlistForm');
    const originalHTML = form.innerHTML;
    form.innerHTML = `
        <div class="waitlist-success">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                <path d="M22 4L12 14.01l-3-3"/>
            </svg>
            <h3>Você entrou na waitlist!</h3>
            <p>Enviaremos o kit completo assim que liberarmos. Verifique sua caixa de entrada.</p>
        </div>
    `;
    
    // Scroll to waitlist section
    scrollToElement('#waitlist');
}

function submitEmail() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        shakeElement('.email-form');
        emailInput.focus();
        return;
    }
    
    // Store form data (in real app, would send to server)
    const fullData = {
        ...formData,
        email: email,
        timestamp: new Date().toISOString()
    };
    
    console.log('Form submitted:', fullData);
    
    // Show success modal
    document.getElementById('successModal').classList.add('active');
    
    // Clear email input
    emailInput.value = '';
}

function closeModal() {
    document.getElementById('successModal').classList.remove('active');
}

function resetForm() {
    // Reset form data
    formData.area = null;
    formData.tarefas = null;
    formData.usaIA = null;
    
    // Reset form inputs
    document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
    document.getElementById('tarefas').value = '';
    
    // Go back to step 1
    showStep(1);
    scrollToElement('.diagnostic-section');
}

// ========================================
// Utility Functions
// ========================================
function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
        });
    }
}

function shakeElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.animation = 'shake 0.5s ease';
        setTimeout(() => {
            element.style.animation = '';
        }, 500);
    }
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
}

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

// ========================================
// Event Listeners
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize progress bar
    updateProgressBar();
    
    // Add click event to option cards for immediate feedback
    document.querySelectorAll('.option-card, .radio-option').forEach(card => {
        card.addEventListener('click', () => {
            // Small haptic-like visual feedback
            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = '';
            }, 100);
        });
    });
    
    // Close modal on backdrop click
    document.getElementById('successModal').addEventListener('click', (e) => {
        if (e.target.id === 'successModal') {
            closeModal();
        }
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: elementPosition - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 13, 20, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 13, 20, 0.8)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.problem-card, .blog-card, .use-case-card, .convince-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
