 import ErrorRepository from "../src/errors";

 describe('ErrorRepository', () => {
    let errorRepo;
  
    beforeEach(() => {
      errorRepo = new ErrorRepository();
    });
  
    test('should return the correct error message for a known code', () => {
      expect(errorRepo.translate(404)).toBe('Not Found');
      expect(errorRepo.translate(500)).toBe('Internal Server Error');
      expect(errorRepo.translate(403)).toBe('Forbidden');
    });
  
    test('should return "Unknown error" for an unknown code', () => {
      expect(errorRepo.translate(123)).toBe('Unknown error');
      expect(errorRepo.translate(0)).toBe('Unknown error');
    });
  });