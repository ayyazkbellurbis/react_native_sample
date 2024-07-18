import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import App from '../src/App';
import { container } from '../src/utils/inversify.config';
import { TYPES } from '../src/utils/types';
import { ISampleRepository } from '../src/modules/repositories/ISampleRepository';
import ErrorBoundary from '../src/components/ErrorBoundary'; // Import ErrorBoundary

// Mocking the repository
const mockGetData = jest.fn();
container.bind<ISampleRepository>(TYPES.SampleRepository).toConstantValue({
  getData: mockGetData,
} as any);

describe('App', () => {
  beforeEach(() => {
    // Clear all mocks
    jest.clearAllMocks();

    // Reset the Inversify container
    container.unbindAll();
    container.bind<ISampleRepository>(TYPES.SampleRepository).toConstantValue({
      getData: mockGetData,
    } as any);
  });

  it('renders loading state and then data', async () => {
    // Mocking the repository's getData method
    mockGetData.mockResolvedValue('Mocked data');

    // Render the component within an ErrorBoundary
    const { getByText } = render(
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    );

    // Check initial loading state
    expect(getByText('Loading...')).toBeTruthy();

    // Wait for the asynchronous state update
    await waitFor(() => {
      expect(getByText('Mocked data')).toBeTruthy();
    });
  });
});
