import 'reflect-metadata';
import { SampleRepository } from '../../../src/modules/repositories/SampleRepository';

describe('SampleRepository', () => {
  it('should return sample data', async () => {
    const repo = new SampleRepository();
    const data = await repo.getData();
    expect(data).toBe('Sample Data');
  });
});
