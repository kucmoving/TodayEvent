﻿using Event_API_.Validation;
using System.ComponentModel.DataAnnotations;

namespace Event_API_.DTOs
{
    public class NewCategoryDTO
    {
        [Required(ErrorMessage = "The field with name {0} is required")]
        [StringLength(10)]
        [FirstLetterUppercase]
        public string Name { get; set; }

    }
}
