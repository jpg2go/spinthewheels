export interface WheelSegment {
  id: string;
  text: string;
  color: string;
  weight: number;
  emoji?: string; // Optional emoji for the segment
  image?: string; // Optional image URL or base64 for the segment
}

export interface SpinResult {
  id: string;
  segment: WheelSegment;
  timestamp: Date;
  spinDuration: number;
}

export interface WheelTemplate {
  id: string;
  name: string;
  description: string;
  segments: WheelSegment[];
  metaTitle?: string; // Optional unique meta title for SEO
}