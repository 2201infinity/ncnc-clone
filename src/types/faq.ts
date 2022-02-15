export interface FAQType {
  qaTypes: QaType[];
}

export interface FAQCont {
  qas: Qa[];
}

export interface QaType {
  id: number;
  key: string;
  name: string;
}

export interface Qa {
  id: number;
  question: string;
  answer: string;
}
