class Computer {
  constructor(manufacturer, processor) {
    this.manufacturer = manufacturer;
    this.processor = processor;
  }

  get manufacturer() {
    return this.manufacturer;
  }
  set manufacturer(newManufacturer) {
    this.manufacturer = newManufacturer;
  }

  get processor() {
    return this.processor;
  }
  set processor(newProcessor) {
    this.processor = newProcessor;
  }
}

class Ultrabook extends Computer {
  constructor(manufacturer, processor, hardDiskSize) {
    super(manufacturer, processor);
    this.hardDiskSize = hardDiskSize;
  }

  get hardDiskSize() {
    return this.hardDiskSize;
  }
  set hardDiskSize(newHardDiskSize) {
    this.hardDiskSize = newHardDiskSize;
  }
}

class ComputingServer extends Computer {
  constructor(manufacturer, processor, numOfProcessorCores) {
    super(manufacturer, processor);
    this.numOfProcessorCores = numOfProcessorCores;
  }

  get numOfProcessorCores() {
    return this.numOfProcessorCores;
  }
  set numOfProcessorCores(newNumOfProcessorCores) {
    this.numOfProcessorCores = newNumOfProcessorCores;
  }
}
