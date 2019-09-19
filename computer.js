class Computer {
  constructor(manufacturer, processor) {
    this._manufacturer = manufacturer;
    this._processor = processor;
  }

  get manufacturer() {
    return this._manufacturer;
  }
  set manufacturer(newManufacturer) {
    this._manufacturer = newManufacturer;
  }

  get processor() {
    return this._processor;
  }
  set processor(newProcessor) {
    this._processor = newProcessor;
  }

  showInfo() {
    return [this.manufacturer, this.processor];
  }
}

class Ultrabook extends Computer {
  constructor(manufacturer, processor, hardDiskSize) {
    super(manufacturer, processor);
    this._hardDiskSize = hardDiskSize;
  }

  get hardDiskSize() {
    return this._hardDiskSize;
  }
  set hardDiskSize(newHardDiskSize) {
    this._hardDiskSize = newHardDiskSize;
  }

  showInfo() {
    return [super.showInfo(), this.hardDiskSize];
  }
}

class ComputingServer extends Computer {
  constructor(manufacturer, processor, numOfProcessorCores) {
    super(manufacturer, processor);
    this._numOfProcessorCores = numOfProcessorCores;
  }

  get numOfProcessorCores() {
    return this._numOfProcessorCores;
  }
  set numOfProcessorCores(newNumOfProcessorCores) {
    this._numOfProcessorCores = newNumOfProcessorCores;
  }

  showInfo() {
    return [super.showInfo(), this.numOfProcessorCores];
  }
}

let computer = new Computer("HP", "AMD");
let ultrabook = new Ultrabook("Lenovo", "Intel", 256);
let computingServer = new ComputingServer("ASUS", "Intel", 4);

console.log(computer.showInfo());
console.log(ultrabook.showInfo());
console.log(computingServer.showInfo());
