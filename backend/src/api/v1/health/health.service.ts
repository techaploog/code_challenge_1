import { Injectable } from "@nestjs/common";

@Injectable()
export class HealthService {
  checkHealth(): { status: string; uptime: number; timestamp: string } {
    const currentTime = new Date().toISOString();
    return {
      status: "ok",
      uptime: process.uptime(),
      timestamp: currentTime,
    };
  }
}
