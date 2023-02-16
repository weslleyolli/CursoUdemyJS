// 705.484.450-52 070.987.720-03
class ValidCpf {
    constructor(cpfSended) {
      Object.defineProperty(this, 'cleanCpf', {
        writable: false,
        enumerable: true,
        configurable: false,
        value: cpfSended.replace(/\D+/g, '')
      });
    }
  
    éSequência() {
      return this.cleanCpf.charAt(0).repeat(11) === this.cleanCpf;
    }
  
    geraCpfNew() {
      const cpfNoDigit = this.cleanCpf.slice(0, -2);
      const digit1 = ValidCpf.digitToGenerate(cpfNoDigit);
      const digit2 = ValidCpf.digitToGenerate(cpfNoDigit + digit1);
      this.cpfNew = cpfNoDigit + digit1 + digit2;
    }
  
    static digitToGenerate(cpfNoDigit) {
      let total = 0;
      let reverse = cpfNoDigit.length + 1;
  
      for(let stringNumerica of cpfNoDigit) {
        total += reverse * Number(stringNumerica);
        reverse--;
      }
  
      const digit = 11 - (total % 11);
      return digit <= 9 ? String(digit) : '0';
    }
  
    valida() {
      if(!this.cleanCpf) return false;
      if(typeof this.cleanCpf !== 'string') return false;
      if(this.cleanCpf.length !== 11) return false;
      if(this.éSequência()) return false;
      this.geraCpfNew();
  
      return this.cpfNew === this.cleanCpf;
    }
  }
  
  let validCpf = new ValidCpf('070.987.720-03');
  // ValidCpf = new ValidCpf('999.999.999-99');
  
  if (validCpf.valida()) {
    console.log('CPF válido');
  } else {
    console.log('CPF inválido');
  }