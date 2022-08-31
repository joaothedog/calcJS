//factory function
function criaCalculadora() {
  return {
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),

    doOperation() {
      let operation = this.display.value;

      try {
        operation = eval(operation);

        if (!operation) {
          alert('Conta inválida');
          this.clearDisplay();
          return;
        }

        this.display.value = operation;
      } catch (e) {
        alert('Conta inválida');
        this.clearDisplay();
        return
      }
    },

    clearDisplay() {
      this.display.value = '';
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1); //tam. da string -1
    },

    inicia() {
      this.clickBtns();
    },


    clickBtns() {
      document.addEventListener('click', e => {
        const el = e.target;

        if (el.classList.contains('btn-num')) {
          this.btnToDisplay(el.innerText);
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if (el.classList.contains('btn-del')) {
          this.deleteOne();
        }

        if (el.classList.contains('btn-eq')) {
          this.doOperation();
        }
      });
    },

    btnToDisplay(valor) {
      this.display.value += valor;
    }
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();