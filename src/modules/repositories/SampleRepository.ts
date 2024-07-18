import { injectable } from 'inversify';
import { ISampleRepository } from './ISampleRepository';

@injectable()
export class SampleRepository implements ISampleRepository {
  async getData(): Promise<string> {
    return "Sample Data";
  }
}
