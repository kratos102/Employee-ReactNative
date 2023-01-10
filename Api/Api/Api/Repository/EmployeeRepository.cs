using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Repository
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly EmployeeDBContext _dBContext;

        public EmployeeRepository(EmployeeDBContext dBContext)
        {
            this._dBContext = dBContext;
        }

        public bool DeleteEmployee(int EmployeeId)
        {
            bool result = false;
            var id = _dBContext.Employees.Find(EmployeeId);
            if (id != null)
            {
                _dBContext.Entry(id).State = EntityState.Deleted;
                _dBContext.SaveChanges();
                result = true;
            }
            else
            {
                result = false;
            }
            return result;
        }

        public async Task<Employee> GetEmployeeByID(int EmployeeId)
        {
            return await _dBContext.Employees.FindAsync(EmployeeId);
        }

        public async Task<IEnumerable<Employee>> GetEmployees()
        {
            return await _dBContext.Employees.ToListAsync();
        }

        public async Task<Employee> InsertEmployee(Employee objEmployee)
        {
            if (objEmployee != null)
            {
                _dBContext.Employees.Add(objEmployee);
                await _dBContext.SaveChangesAsync();
                return objEmployee;
            }
            return null;
        }

        public async Task<Employee> UpdateEmployee(Employee objEmployee)
        {
            _dBContext.Entry(objEmployee).State = EntityState.Modified;
            await _dBContext.SaveChangesAsync();
            return objEmployee;
        }
    }
}
