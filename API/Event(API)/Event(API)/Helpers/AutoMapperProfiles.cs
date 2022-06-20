using AutoMapper;
using Event_API_.DTOs;
using Event_API_.Model;

namespace Event_API_.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<CategoryDto, Category>().ReverseMap();
            CreateMap<NewCategoryDTO, Category>();
        }
    }
}
