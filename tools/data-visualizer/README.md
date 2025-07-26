# Data Visualizer

An interactive data visualization tool that transforms your data into beautiful, insightful charts and graphs.

## Features

### 📊 Chart Types
- **Bar Charts** - Compare categories and values
- **Line Charts** - Show trends over time
- **Pie Charts** - Display proportions and percentages
- **Doughnut Charts** - Modern pie chart alternative
- **Scatter Plots** - Analyze correlations
- **Area Charts** - Emphasize magnitude of change

### 📁 Data Import Options
- **File Upload** - Drag & drop CSV, JSON, or Excel files
- **Direct Input** - Paste CSV data directly
- **Sample Datasets** - Get started with pre-loaded examples
  - Sales data
  - Demographics
  - Financial reports
  - Survey results

### 🛠️ Advanced Features
- **Interactive Filtering** - Filter data by columns and values
- **Search Functionality** - Search across all data
- **Data Grouping** - Group data by categories
- **Real-time Updates** - Charts update as you filter data
- **Export Options** - Download charts as PNG or data as CSV/JSON

### 📋 Data Management
- **Smart Detection** - Automatically detects numeric vs text columns
- **Data Summary** - View row count, column types, and statistics
- **Pagination** - Handle large datasets efficiently
- **Data Validation** - Error handling for malformed data

### 🎨 Customization
- **Chart Options** - Toggle legend, grid, animation, and responsiveness
- **Color Schemes** - Automatic color assignment for clarity
- **Responsive Design** - Works on all device sizes
- **Fullscreen Mode** - Maximize charts for presentation

## How to Use

### 1. Import Your Data
- **Upload Files**: Drag and drop or click to select CSV, JSON, or Excel files
- **Paste Data**: Copy CSV data directly into the text area
- **Use Samples**: Click sample data buttons to explore features

### 2. Configure Your Chart
- **Select Chart Type**: Choose from 6 different visualization types
- **Set Axes**: Pick X and Y axis columns from your data
- **Add Grouping**: Group data by categories for deeper insights
- **Customize**: Toggle chart options like legend and grid

### 3. Analyze and Filter
- **Search**: Use the search box to find specific data
- **Filter**: Click column headers to filter by specific values
- **Browse**: Navigate through large datasets with pagination
- **Export**: Download filtered data or chart images

## Supported File Formats

### CSV (Comma-Separated Values)
```csv
Name,Value,Category
Product A,120,Electronics
Product B,80,Clothing
Product C,200,Electronics
```

### JSON (JavaScript Object Notation)
```json
[
  {"Name": "Product A", "Value": 120, "Category": "Electronics"},
  {"Name": "Product B", "Value": 80, "Category": "Clothing"},
  {"Name": "Product C", "Value": 200, "Category": "Electronics"}
]
```

### Excel Files (.xlsx)
- First sheet only
- Headers in first row
- Mixed data types supported

## Chart Type Guide

### Bar Charts
- **Best for**: Comparing categories, ranking data
- **Requires**: Categorical X-axis, numeric Y-axis
- **Supports**: Grouping by additional categories

### Line Charts
- **Best for**: Time series data, trends over time
- **Requires**: Sequential X-axis, numeric Y-axis
- **Supports**: Multiple data series

### Pie/Doughnut Charts
- **Best for**: Showing proportions, parts of a whole
- **Requires**: Categorical data with numeric values
- **Note**: Best with 5-7 categories maximum

### Scatter Plots
- **Best for**: Correlation analysis, pattern detection
- **Requires**: Two numeric columns
- **Supports**: Trend line analysis

### Area Charts
- **Best for**: Emphasizing magnitude of change over time
- **Requires**: Sequential X-axis, numeric Y-axis
- **Supports**: Stacked areas for comparison

## Tips for Best Results

### Data Preparation
- Ensure first row contains column headers
- Use consistent data formats within columns
- Remove empty rows and columns
- Use clear, descriptive column names

### Chart Selection
- Use bar charts for categorical comparisons
- Choose line charts for time-based data
- Select pie charts for proportional data (limit to 7 categories)
- Use scatter plots for correlation analysis

### Performance
- Large datasets (>1000 rows) may load slowly
- Filter data before creating complex charts
- Use pagination for tables with many rows
- Export filtered datasets for external analysis

## Keyboard Shortcuts

- **Ctrl/Cmd + F**: Focus search box
- **Escape**: Close modals and dropdowns
- **Enter**: Apply filters in dropdown
- **Tab**: Navigate through interface elements

## Troubleshooting

### Common Issues
- **"No data found"**: Check file format and ensure it's not empty
- **"Invalid CSV"**: Verify comma separation and consistent column count
- **"Chart not displaying"**: Ensure X and Y axes are selected with valid data
- **"Export failed"**: Check browser popup blocker settings

### Performance Tips
- Filter large datasets before visualization
- Use appropriate chart types for data size
- Close unused browser tabs for better performance
- Consider data sampling for very large datasets

## Browser Compatibility

- **Chrome**: Fully supported (recommended)
- **Firefox**: Fully supported
- **Safari**: Fully supported
- **Edge**: Fully supported
- **Mobile**: Responsive design works on all mobile browsers

## Privacy & Security

- All data processing happens locally in your browser
- No data is sent to external servers
- Files are not stored permanently
- Clear browser cache to remove any temporary data
