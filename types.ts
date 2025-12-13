export interface NavItem {
  label: string;
  icon: string;
  path: string;
}

export interface StatCardProps {
  title: string;
  value: string;
  unit?: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: string;
  isPrimary?: boolean;
}

export interface PatientRecord {
  age: number;
  gender: 'male' | 'female';
  bmi: number;
  riskLevel: 'Low' | 'Medium' | 'High';
}
