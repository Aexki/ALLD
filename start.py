# from pyspark.sql.functions import min, max
# from pyspark.sql.functions import mean
# from pyspark.sql.functions import format_number
# from pyspark.sql.functions import month
# from pyspark.sql.functions import year
# from pyspark.sql.functions import corr
from pyspark.sql import SparkSession

spark = SparkSession.builder.appName('firstApp').getOrCreate()

df = spark.read.csv('GOOG.csv', header=True, inferSchema=True)
# print(df.printSchema())

for row in df.head(10):
    print({'Date': row['Date'], 'Close': row['Close']})

# print(df.describe().show())
# description = df.describe()

# print(description.select(description['summary'],
#                          format_number(description['Open'].cast(
#                              'float'), 2).alias('Open'),
#                          format_number(description['High'].cast(
#                              'float'), 2).alias('High')
#                          ).show())

# new_df = df.withColumn("OV Ratio", df['Open']/df['Volume'])
# print(new_df.show())

# print(new_df.select("OV Ratio").show())

# print(df.orderBy(df['High'].desc()).head(1))

# print(df.select(mean('Open')).show())


# print(df.select(max('Close'), min('Close')).show())

# print(df.filter("Volume < 2000000").count())

# print((df.filter(df['Open'] > 1000).count() * 1.0 / df.count()) * 100)


# print(df.select(corr('Volume', 'Open')).show())


# df_with_year = df.withColumn("Year", year(df['Date']))

# print(df_with_year.groupBy("Year").max().select('Year', "max(High)").show())


# print(df.withColumn("Month", month("Date")).select(
#     "Month", "High").groupBy("Month").mean().select("Month", "avg(High)").orderBy("Month").show())

# app = SparkSession.builder.appName('SQL').getOrCreate()

# df.createOrReplaceTempView("Stock")

# result = app.sql('Select * from stock')

# print(result)

# app.sql('Select count(Open) from stock where Open>1500').show()
