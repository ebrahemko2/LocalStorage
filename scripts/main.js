const keyInput = document.getElementById('keyInput');
const valueInput = document.getElementById('valueInput');
const insertBtn = document.getElementById('insertBtn');
const clearBtn = document.getElementById('clearBtn');
const outputs = document.getElementById('outputs');

insertBtn.onclick = () => {
    const key = keyInput.value;
    const keyValue = valueInput.value;

    if (key && keyValue) {
        localStorage.setItem(key, keyValue);
        location.reload();
    }

    
}

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    outputs.innerHTML += `${key}: ${value} </br>`;
}


clearBtn.onclick = () => {
    localStorage.clear();
    location.reload();
}
