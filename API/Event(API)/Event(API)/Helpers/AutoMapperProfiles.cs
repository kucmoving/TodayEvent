using AutoMapper;
using Event_API_.DTOs;
using Event_API_.Model;
using NetTopologySuite.Geometries;

namespace Event_API_.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles(GeometryFactory geometryFactory)
        {
            CreateMap<CategoryDTO, Category>().ReverseMap();
            CreateMap<NewCategoryDTO, Category>();

            CreateMap<HolderDTO, Holder>().ReverseMap();
            CreateMap<NewHolderDTO, Holder>()
                .ForMember(x => x.Picture, options => options.Ignore()); //Ifile from frontend, string at backend

            CreateMap<EventLocation, EventLocationDTO>()
                .ForMember(x => x.Latitude, dto => dto.MapFrom(prop => prop.Location.Y))
                .ForMember(x => x.Longitude, dto => dto.MapFrom(prop => prop.Location.X));

            CreateMap<NewEventLocationDTO, EventLocation>()
                .ForMember(x => x.Location, x => x.MapFrom(dto =>
                geometryFactory.CreatePoint(new Coordinate(dto.Longitude, dto.Latitude))));
        }
    }
}
