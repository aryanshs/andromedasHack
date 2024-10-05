import requests
import json

baseUrl = "https://osdr.nasa.gov/osdr/data/osd/meta/"

studyId = 379

headers = {
    'Authorization' : 'Bearer bTYHcwfSXhfu7jZ9hQFEm4p7avl0LhMWxT8FHWKy',
    'Content-Type' : 'application/json'
}

# making get request to the api
try:
    response = requests.get(baseUrl + str(studyId), headers=headers)
    response.raise_for_status()  # raises HTTPError for bad responses
    data = response.json().get('study').get('OSD-379').get('studies')[0].get('factors')
    print(len(data))

    
    # save the JSON data to a file
    with open('osd_379_data.json', 'w') as json_file:
        json.dump(data, json_file, indent=2)  
    
    print("Data has been successfully saved to osd_379_data.json")
    
except requests.exceptions.HTTPError as http_err:
    print(f"HTTP error occurred: {http_err}")
    
except Exception as err:
    print(f"An error occurred: {err}")