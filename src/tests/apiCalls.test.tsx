import axios from "axios";
import { act } from "@testing-library/react";
import {
  CitiesApi,
  CitiesPopularApi,
  CitiesPopularFromApi,
} from "../utils/apiCalls";

// mocked axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("check the recovery of data from api calls", () => {
  test("get data city", async () => {
    const searchValue = "paris";
    const setCities = jest.fn();
    const mockData = [
      {
        city_id: 628,
        station_id: 0,
        local_name: "Paris, Île-de-France, France",
        latitude: 48.8566,
        longitude: 2.3515,
        unique_name: "paris",
        station_unique_name: null,
        iscity: true,
        score: 36,
        serviced: true,
        emoji: null,
        gpuid: "c|FRparis___@u09tv",
      },
    ];
    // mocked api calls
    mockedAxios.get.mockResolvedValue({ data: mockData });
    // get data city
    await act(async () => {
      await CitiesApi(searchValue, setCities);
    });
    expect(setCities).toHaveBeenCalledWith(mockData);
  });

  test("get data from a popular city", async () => {
    const setCitiesPopular = jest.fn();
    const mockData = [
      {
        id: 542,
        unique_name: "montpellier",
        local_name: "Montpellier, Occitanie, France",
        latitude: 43.604452,
        longitude: 3.918318,
        new_id: "c|FRmontpell@spfb1",
        city_id: 542,
        gpuid: "c|FRmontpell@spfb1",
        nb_search: "21",
        popular: true,
        iscity: true,
      },
    ];
    // mocked api calls
    mockedAxios.get.mockResolvedValue({ data: mockData });
    // get data city
    await act(async () => {
      await CitiesPopularApi(setCitiesPopular);
    });
    expect(setCitiesPopular).toHaveBeenCalledWith(mockData);
  });

  test("get data from a popular city from a given city", async () => {
    const localName = "paris";
    const setCitiesPopularFrom = jest.fn();
    const mockData = [
      {
        id: 735,
        unique_name: "saint-jean-de-luz",
        local_name: "Saint-Jean-de-Luz, Nouvelle-Aquitaine, France",
        latitude: 43.388051,
        longitude: -1.663055,
        new_id: "c|FRsaijealu@ezwyf",
        city_id: 735,
        gpuid: "c|FRsaijealu@ezwyf",
        nb_search: "893",
        popular: true,
        iscity: true,
      },
    ];
    // mocked api calls
    mockedAxios.get.mockResolvedValue({ data: mockData });
    // get data city
    await act(async () => {
      await CitiesPopularFromApi(localName, setCitiesPopularFrom);
    });
    expect(setCitiesPopularFrom).toHaveBeenCalledWith(mockData);
  });
});
