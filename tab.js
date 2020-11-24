const tabBtns = document.querySelectorAll('.tab-btn');
const tabContent = document.querySelectorAll('.tab-content');

function showTab(tabId) {
    for (let button of tabBtns) {
        if (tabId == button.dataset.tabId) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    }

        for (let tab of tabContent) {
        if (tabId == tab.dataset.tabId) {
            tab.style.display = "block";
        } else {
            tab.style.display = "none";
        }
    }

        for (let button of tabBtns) {
        button.addEventListener('click', () => {
            showTab(button.dataset.tabId);
        });
        }
    }

    showTab("who");

