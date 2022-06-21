using AutoMapper;
using Event_API_.DTOs;
using Event_API_.Model;

namespace Event_API_.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<CategoryDTO, Category>().ReverseMap();
            CreateMap<NewCategoryDTO, Category>();

            CreateMap<HolderDTO, Holder>().ReverseMap();
            CreateMap<NewHolderDTO, Holder>()
                .ForMember(x => x.Picture, options => options.Ignore()); //Ifile from frontend, string at backend
        }
    }
}
