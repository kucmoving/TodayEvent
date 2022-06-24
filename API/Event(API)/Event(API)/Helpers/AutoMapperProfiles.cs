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

                CreateMap<NewEventDTO, Event>()
                    .ForMember(x => x.Picture, options => options.Ignore())
                    //mapping to pass DTO to Event but handle with many to many relationship by logic 
                    .ForMember(x => x.EventCategories, options => options.MapFrom(MapEventCategories))
                    .ForMember(x => x.EventLocationEvents, options => options.MapFrom(MapEventLocationEvent))
                    .ForMember(x => x.EventHolders, options => options.MapFrom(MapEventHolder));

        }

            private List<EventCategory> MapEventCategories(NewEventDTO newEventDTO, Event _event)
            {
                var result = new List<EventCategory>();

                if (newEventDTO.CategoryIds == null) { return result; }

                foreach (var id in newEventDTO.CategoryIds)
                {
                    result.Add(new EventCategory() { CategoryId = id });
                }

                return result;
            }


            private List<EventLocationEvent> MapEventLocationEvent(NewEventDTO newEventDTO
                , Event _event)
            {
                var result = new List<EventLocationEvent>();

                if (newEventDTO.EventLocationIds == null) { return result; }

                foreach (var id in newEventDTO.EventLocationIds)
                {
                    result.Add(new EventLocationEvent() { EventLocationId = id });
                }

                return result;
            }

            private List<EventHolder> MapEventHolder(NewEventDTO newEventDTO, Event _event)
            {
                var result = new List<EventHolder>();

                if (newEventDTO.Holder == null) { return result; }

                foreach (var holder in newEventDTO.Holder)
                {
                    result.Add(new EventHolder() { HolderId = holder.Id, ContactPerson = holder.ContactPerson });
                }

                return result;
            }

        }
    }
