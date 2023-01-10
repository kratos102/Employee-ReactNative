using Microsoft.EntityFrameworkCore;

namespace Api.Models
{
    public class EmployeeDBContext : DbContext
    {
        public DbSet<Employee> Employees { get; set; }

        public EmployeeDBContext(DbContextOptions<EmployeeDBContext> options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            //seed data
            modelBuilder.Entity<Employee>().HasData(
                    new Employee
                    {
                        EmployeeId = 12,
                        EmployeeName = "Kien",
                        EmployeePassword = "123",
                        EmployeeEmail = "k@test.abc",
                        EmployeePhoneNumber = "0123456789"
                    },
                    new Employee
                    {
                        EmployeeId = 123,
                        EmployeeName = "Kien",
                        EmployeePassword = "123",
                        EmployeeEmail = "k@test.abc",
                        EmployeePhoneNumber = "0123456789"
                    }
                );
        }
    }
}
