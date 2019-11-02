using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace crossTask.ViewModel
{
    public class EmployeeViewModel
    {
        public int EmployeeID { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public DateTime DOB { get; set; }

        //For Future Use Maybe.
        public int DepartmentID { get; set; }
        public string DepartmentName { get; set; }
    }
}
