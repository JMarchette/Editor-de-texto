$(document).ready(function() {
    // Função para o botão personalizado
    function customButtonFunction() {
        alert('Botão personalizado clicado!');
    }

    // Inicialização do editor com configuração personalizada
    $('#editor').wysiwyg({
        toolbar: {
            container: '#toolbar',
            items: [
                { title: 'Modo', icon: '<i class="fas fa-pencil"></i>', callback: 'toggleMode' },
                { title: 'Desfazer', icon: '<i class="fas fa-undo"></i>', callback: 'undo' },
                { title: 'Refazer', icon: '<i class="fas fa-redo"></i>', callback: 'redo' },
                { title: 'Negrito', icon: '<i class="fas fa-bold"></i>', callback: 'bold' },
                { title: 'Itálico', icon: '<i class="fas fa-italic"></i>', callback: 'italic' },
                { title: 'Sublinhado', icon: '<i class="fas fa-underline"></i>', callback: 'underline' },
                { title: 'Personalizado', icon: '<i class="fas fa-star"></i>', callback: customButtonFunction }
            ]
        },
        fontSizes: ['10px', '12px', '14px', '16px', '18px', '20px'],
        fontFamilies: ['Open Sans', 'Arial', 'Helvetica', 'Times New Roman'],
        fontFamilyDefault: 'Open Sans',
        mode: 'source',
        debug: false,
        language: 'pt-br',
        translations: {}
    });
});
